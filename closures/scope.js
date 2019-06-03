// Closures in javascript
// This example shows how closures can be used to create the public and private variable scope.
// The setting function returns an object with getUrl,toString and increment function.
// When these functons are called later on from getDetails, they have created a closure with the private 
// variables url,visitorCount which otherwise cannot be called from outside the setting function.
// getUrl,toString and increment are public functions, which create closures for the private variables.
//Also an encapsulation is created for the private variables so that they are not accessed from outside the setting function.

function setting(newUrl) {
    var url = newUrl;
    var visitorCount = 0;

    var getUrl = function () {
        return url;
    }
    var toString = function () {
        return `${url} is visited ${visitorCount} times`;
    }
    var increment = function () {
        visitorCount++;
        return visitorCount;
    }

    return {
        getUrl: getUrl,
        toString: toString,
        increment: increment

    }

}

var mysite = setting("http://mysite.com");

function checkScope(){
    console.log(mysite.getUrl());
    console.log(mysite.increment());
    console.log(mysite.toString());
}
