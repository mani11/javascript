
//class and constructor in es6
class Alert{
    constructor(title){
        this.title = title || 'default alert';
    }

    //instance method
    show(){
        console.log(this.title);
    }

    toString(){
        return `Alert -> ${this.title}`
    }
}

//sub class of Alert
class SuccessAlert extends Alert{
    constructor(title){
    super(title);
    this.type = "success";
    }
}

//sub class of Alert
class FailureAlert extends Alert{
    constructor(title){
        super(title);
        this.type = "failure";
    }
    //overriding base class method
    toString(){
        var result = super.toString();
        return `${result} is of type ${this.type}` 
    }
}

var alert = new Alert('new alert');
console.log(alert.title);
alert.show();
alert.toString();

//success alert
var success = new SuccessAlert('success alert');
console.log(success.title);
success.show();
console.log(success.toString());

//failure alert
var failure = new FailureAlert('failure alert');
failure.show();
console.log(failure.toString());


