let	https;

try 
{
	https = await import("node:https");
} catch (err) 
{
	console.error("https support is disabled!");
}

import {fs} from "node:fs";

const	
	options = 
	{
		key: fs.readFileSync("test/fixtures/keys/agent2-key.pem"),
		cert: fs.readFileSync("test/fixtures/keys/agent2-cert.pem"),
	},
	requestListener = (req, res) =>
	{
		res.write("Hello World!"); //write a response to the client
		res.end(); //end the response
	},
	server = https.createServer(options , requestListener);

server
	.listen(80, "10.0.0.4"); //the server object listens on port 8080