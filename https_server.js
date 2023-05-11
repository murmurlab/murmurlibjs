let	https;

try 
{
	https = await import("node:https");
} catch (err) 
{
	console.error("https support is disabled!");
}

import * as fs from "node:fs";

const
	requestListener = (req, res) =>
	{
		res.write("Hello World!"); //write a response to the client
		res.end(); //end the response
	},
	config = (cfg) =>
	{
		const
			server = https.createServer(options , requestListener),
			options = 
			{
				key: fs.readFileSync(cfg.key),
				cert: fs.readFileSync(cfg.cert),
			}
		server
			.listen(80, "10.0.0.4"); //the server object listens on port 8080	
	}

export { config }