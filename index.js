const http = require('http');
const fs = require('fs');
const url = require('url');

const MyServer = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const pathname = parsedURL.pathname;

    try {
        if (pathname === "/" || pathname === "/index.html") {
            fs.readFile("./index.html", "utf-8", (err, data) => {
                if (err) {
                    console.error('Error reading index.html:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end("<h1>Internal Server Error</h1>");
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });

        } else if (pathname === "/register.html") {
            fs.readFile("./register.html", "utf-8", (err, data) => {
                if (err) {
                    console.error('Error reading register.html:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end("<h1>Internal Server Error</h1>");
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
            
        } else if (req.method === "POST" && pathname === "/location") {
            let body = "";

            req.on("data", chunk => {
                body += chunk.toString(); 
            });

            req.on("end", async () => {
                try {
                    const data = JSON.parse(body); 
                    console.log("Received location data:", data);

                    fs.appendFile("locations.txt", JSON.stringify(data) + "\n", (err) => {
                        if (err) {
                            console.error("Error writing to file:", err);
                            res.writeHead(500, { "Content-Type": "text/plain" });
                            res.end("Failed to save location data");
                        } else {
                            res.writeHead(200, { "Content-Type": "text/plain" });
                            res.end("Location received and saved successfully");
                        }
                    });

                } catch (err) {
                    console.error("Error processing location data:", err);
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Failed to process location data");
                }
            });

        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>Page Not Found</h1>");
        }

    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end("<h1>Internal Server Error, Please StandBy ☺️</h1>");
        console.log(err);
    }
});

MyServer.listen(8000, () => {
    console.log("Server Started on PORT : 8000");
});