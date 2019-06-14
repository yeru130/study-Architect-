function Person(name, age) {
    this.name = name;
    this.age = age;
    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function() {
            console.log(this.name);
           
        }
    }
}
var friend = new Person('yeru',29);
friend.sayName();