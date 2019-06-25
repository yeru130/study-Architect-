// buffer 长什么样子
// 声明buffer的方式 3中 固定长度 固定的内容
 let buffer = Buffer.alloc(5);  //安全 <Buffer 00 00 00 00 00>
 console.log(buffer);
// utf8编码
// 固定的内容
let buffer1 = Buffer.from('珠峰');
console.log(buffer1); // 16进制 buffer和字符串可以互相转化

// 通过数组来声明buffer 0b 二进制 0 八进制  0x16进制  控制台打不出来 其他进制的
let buffer2 = Buffer.from([0x16]);
console.log(buffer2);

// 希望实现进制的转化 16 -> 2
console.log((0x16).toString(2)); // 10110

console.log(parseInt('10110',2)); //任意进制转化成10进制

// base64 取代所有的url 不会发起请求  速度快  小图标
// 一个汉字 24个位 
//base64 做一个编码转化 转化的规则是大家都知道的
let buf = Buffer.from('珠');
console.log(buf);//e7 8f a0
console.log(buf.toString('base64'));

console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
// 111001 111000 111110 100000

console.log(parseInt('111001',2));
console.log(parseInt('111000',2));
console.log(parseInt('111110',2));
console.log(parseInt('100000',2));
// 57 56 62 32

// base64 做一个编码转化  转化的的规则是大家都知道的
let str = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
str += 'abcdefghijklmnopqrstuvwxyz';
str += '0123456789+/';
console.log(str[57]+str[56]+str[62]+str[32]);

// buffer中放的都是内存
let buf = Buffer.from('叶子');
let newBuffer = buf.slice(2);
newBuffer[0] = 100;
console.log(buf.toString());

let arr = [[1,2,3]];
let newArr = arr.slice(0);
newArr[0][1] = 100;
console.log(arr);

// buffer中的方法 slice索引 length(字节长度) indexOf 静态方法
let buffer = Buffer.from('珠峰架构珠峰架构珠峰架构');
Buffer.prototype.split = function(sep) {
    let pos = 0;
    let len = Buffer.from(sep).length;
    let arr = [];
    let current;
    while((current = this.indexOf(sep,pos))!==-1) {
        pos = current + len;
        current = this.indexOf(sep,pos);
        if(current==-1){
            arr.push(this.slice(pos))
        } else {
            arr.push(this.slice(pos,current));
        }
    }
    return arr;
   
}
let arr = buffer.split('珠峰');
console.log(arr.toString());

//
