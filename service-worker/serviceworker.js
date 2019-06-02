//version4
console.log("We are serveice worker");

try{
importScripts('events.js')
}
catch(e){
    console.log("Error loading the files");
}

self.addEventListener("fetch", event => {
    console.log(`Fetching ${event.request.url}`);
    const parsedURL = new URL(event.request.url);
    if(parsedURL.pathname == "/service-worker/"){
        return;
    }
    if(parsedURL.pathname.match(/^\/service-worker\/api\/*/)){
       const object = {
           temp:56
       } 
       const JsonRespone = new Response(JSON.stringify(object),{
           status:200,
           statusText:"OK",
           headers:{
            "ContentType":"application/json"
        }

       })
       event.respondWith(JsonRespone);
    }

    const body = `
    <!doctype html>
    <title>Service Worker HTML generator</title>
    <h1>
        Fetching ${event.request.url}
    </h1>
    <ul>
        <li>Cache: ${event.request.cache}</li>
        <li>Credentials: ${event.request.credential}</li>
        <li>Destination: ${event.request.destination}</li>
        <li>Method: ${event.request.method}</li>
        <li>Referrer: ${event.request.referrer}</li>
    </ul>
    `
    const response = new Response(body,
        {
            status:200,
            statusText:"OK",
            headers:{
                "contentType":"text/html"
            }
        });
    event.respondWith(response);

});