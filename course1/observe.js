//观察者和被观察者模式
class Subject{//被观察者
    constructor(state){
        this.state = state;
        this._arr = [];
    }
    attach(...observers){
        this._arr.push(...observers);
    }
    setState(newState){
        this._arr.forEach(fn =>fn.update(newState))
    }
}
class Observe{//观察者
    constructor(who){
        this.who = who;
    }
    update(newState){
        console.log(this.who+newState);
    }
}
let baby = new Subject();
let my1 = new Observe('我');
let my2 = new Observe('老公');
baby.attach(my1,my2);
baby.setState('大哭');