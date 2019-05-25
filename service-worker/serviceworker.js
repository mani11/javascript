console.log("We are serveice worker");

self.addEventListener("install",event => {
    console.log("Install Event");
});

self.addEventListener("activate",event => {
    console.log("Activate Event");
})