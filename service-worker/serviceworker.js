console.log("We are serveice worker");

try{
importScripts('events.js')
}
catch(e){
    console.log("Error loading the files");
}