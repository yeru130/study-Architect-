//箭头函数 没有this和arguments
let a = function(x,y){
  return x+y;
}
//可以写成,函数有多个参数的话用小括号括起来，返回的时候去掉return就去掉大括号
let a = (x,y)=> x+y; 
//如果返回的值是一个对象的话，就不能这样写返回值要加小括号
let a = (x,y)=> {total: x+y}

//this的问题 看.前面是谁，this就是谁
let a = 1;
let obj = {
    a:2,
    fn:function(){
        console.log(this.a);//此时的this为obj
    }
}
obj.fn();
//第二个例子
let a = 1;
let obj = {
    a:2,
    fn:function(){
        setTimeout(function(){
            console.log(this.a);//此时的this是window,因为let 并不挂在在window下，所以返回值为undefined
        },2000)
    }
}
obj.fn();
//第三个例子
let a = 1;
let obj = {
    a:2,
    fn:function(){
        setTimeout(() => {
            console.log(this.a);//这个是在箭头函数里，箭头函数没有this，则向上一级作用域找this,找到function里面的this，this为obj,此时this.a 为2
        }, 2000);
    }
}
obj.fn();
//第三个例子
//第三个例子
let a = 1;
let obj = {
    a:2,
    fn:() => {//这个作用域没有this指向因为是箭头函数，所以往上一级作用域找，为window,window没有a属性，则取到的值为undefined
        setTimeout(() => {
            console.log(this.a);//这个是在箭头函数里，箭头函数没有this，则向上一级作用域找this,找到function里面的this，this为obj,此时this.a 为2
        }, 2000);
    }
}
obj.fn();