function after(times, callback){
    return function(){
        if(--times == 0){ // --times和times--是不同的效果，--times是先减再赋值，而times--是先赋值再减，所以times--需要运行四次才有效果
            callback();
        }
    }
}
let newFn = after(3, function(){
    console.log('运行这句话');
})
newFn();
newFn();
newFn();


