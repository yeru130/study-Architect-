// fs.open fs.read fs.write fs.close
let fs= require('fs');

let path = require('path');
// flages 对文件的操作类型 w r + a
// mode 权限 读取 4 写入 2 执行 1 chmod -R 777 八进制
let buffer = Buffer.alloc(3);
fs.open(path.resolve(__dirname,'./age.txt'),'r',438,(err,fd)=>{
    // fd文件描述符 buffer 读取到哪个内存中 0 buffer的偏移量
    fs.read(fd,buffer,0,3,4,(err,bytesRead)=>{
        console.log(bytesRead);
        console.log(buffer.toString());
    })
})// 10进制

// r+ 如果晚间不存在会报错 w+已写为标准没有这个文件会创建
let buffer = Buffer.from('珠峰');
fs.open(path.resolve(__dirname,'./name.txt'),'r+',(err,fd)=>{
    // fd代表的是写入的文件的描述符 写入的内容 从buffer的哪段放入里面（3 3） 0写到文件的哪个地方  
    fs.write(fd,buffer,3,3,0,(err,writeten)=>{
    
    })
})
//拷贝

function copy(source,target) {
    let buffer = Buffer.alloc(3);
    let pos =0;
    fs.open(source,'r',(err,rfd)=>{
        fs.open(target,'w',(err,wfd)=>{
            function next(){
                fs.read(rfd,buffer,0,3,pos,(err,bytesRead)=>{
                    if(bytesRead>0){//能读取到内容就继续读取
                        pos += bytesRead;
                        fs.write(wfd,buffer,0,bytesRead,(err,writetten)=>{
                            next();
                        });
                    } else{
                       // 读取完毕 
                       fs.close(rfd,()=>{})
                       fs.close(wfd,()=>{})
                    }
                   
                })
            }
            next();
            
        })
    })
}

copy(path.resolve(__dirname,'./age.txt'),path.resolve(__dirname,'./name.txt'))