## Web Worker in javascript
A small project to demonstrate the use of webworker in javascript.

## Description
In this project, we have a list of countries and their capitals in the data.json file. We are calculating the distance between the co-ordinates from one capital city to all the other capital cities.
After calculating the distance be

Since this is a heavy calculation because of the large set of data in data.json file,performing this calculation in the main thread will reduce the site performance and can leave the page unresponsive.
Hence we create a new thread in the form of a web worker - cities. Now the heavy calculation is performed in the cities thread.

We are passing the data to and from the web worker using the javascript postMessage.

###Pre-requisites
1. Text Editor (I used visual studio code)
2. Server (I used Live server from visual studio code)

### Getting Started 
Clone the project and launch the index.html from the server.
Click the start button to view the web worker in action.

