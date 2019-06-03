function show(message) {
    document.getElementById("message").innerHTML = message;
}
function showMessage() {
    var helperText = [
        { id: "email", text: "email must be in correct format" },
        { id: "username", text: "username must be 16 characters long" },
        { id: "phone", text: "No special character allowed" }
    ]

    for (var i = 0; i < helperText.length; i++) {
        var item = helperText[i];
        //The inner function creates a closure with the value of the item sent to the outer function in each iteration
        (function (message) {
            document.getElementById(item.id).onfocus = function () {
                show(message.text);
            }
        })(item)
    }
}

showMessage();