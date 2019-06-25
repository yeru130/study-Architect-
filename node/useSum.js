let r = require('./sum');//fs.readFileSync()
console.log(r(1,2));

// 优点：require是同步执行了

// 核心模块
// path模块 专门用来处理文件路径的
// extname basename join resolve
let fs = require('fs');
console.log(path.basename('1.js','.js'));