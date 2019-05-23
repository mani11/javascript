/**
 * 
 * @param {*} title 
 * Constructor function in ES5 
 */
function Message(title){
    if(!(this instanceof Message)){
        return new Message()
    }
    this.title = title || "default message";
}
//Defining instance methods. Instance methods must be defined within the prototype of the constructor function.
//If not then there will be multiple methods each for the instance created.This is not memory efficient.
Message.prototype.show = function(){
    console.log("You have a new message "+this.title);
}
Message.prototype.toString = function(){
    return `Message -> ${this.title}`;
}

//child class of the Message class(or function)
function SuccessMessage(title){
   Message.call(this,title); // Calling the constructor of the parent class Message
   this.type = 'success';
}
//Copying the prototype from parent class to child class ~ Inheritance
SuccessMessage.prototype = Object.create(Message.prototype);
SuccessMessage.prototype.constructor = SuccessMessage;

//Overriding the method of the parent class
SuccessMessage.prototype.toString = function(){
    var result = Message.prototype.toString.call(this);
    return `${result} is of type ${this.type}`;
}

//child class of the Message class
function FailureMessage(title){
    Message.call(this,title)
    this.type = 'failure';
}

//Copying the prototype from parent class to child class
FailureMessage.prototype = Object.create(Message.prototype);
FailureMessage.prototype.constructor = FailureMessage;


var message = new Message("new message");
console.log(message.title);
message.show()
console.log(message.toString());


var successMessage = new SuccessMessage('Success Message');
successMessage.show();
console.log(successMessage.toString())

var failureMessage = new FailureMessage('Failure Message');
failureMessage.show();

