async function async1() {
    console.log('async1 start');
    await async2();
    console.log('xxx');//问xxx在哪里执行?,在浏览器 不同的版本，把promise进行转化后的结果不太一样,
                       //可能转化成两个then 可能转化成一个then
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(() => {
    console.log('setTimeout');
}, 0);

async1();
new Promise((resolve)=>{
    console.log('promise1');
    resolve();
}).then(()=>{
    console.log('promise2');
})
console.log('script end');

// script start  async1 start async2   promise1 script end   promise2  xxx   setTimeout