function Promise(executor){
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    let self = this;
    function resolve(value){
        if(this.status = 'pending'){
            self.value = value;
            this.status = 'fulfilled'
        }
    }
    function reject(reason) {
        if(this.status = 'pending'){
            self.reason = reason;
            this.status = 'rejected'
        }
    }
    executor(resolve,reject)
}
Promise.prototype.then = function(onfulfilled,onrejected){
    let self = this;
    if(self.status === 'fulfilled'){
        onfulfilled(self.value);
    }
    if(self.status === 'onrejected'){
        onrejected(self.reason);
    }
}
module.exports = Promise