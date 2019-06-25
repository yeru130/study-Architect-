// 永远不要让别人告诉你你不能够干什么，集中注意力不被任何事情所影响，
// 坚定意见，你要知道所有人的结果都是需要付出努力的，如果是不擅长的东西更是千倍万倍的努力
// buffer 能要到的 slice 截取 indexOf 循环 有长度 有索引
let buffer = Buffer.from('珠峰');
console.log(Buffer.isBuffer(buffer)); // 判断是不是buffer
// concat, copy
// 拼接数据 tcp http 需要把多个buffer拼接到一起
 let buffer1 = Buffer.from('珠峰');
 let buffer2 = Buffer.from('架构');

 let bigBuffer = Buffer.alloc(12);
 Buffer.prototype.copy = function(){

 }
 buffer1.copy()


