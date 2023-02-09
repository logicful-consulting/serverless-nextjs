// The generated lambda server function looks a little something like this before it is transpiled.
// Essentially just spinning up a standalone next server that we pass the query off to.
import serverless from 'serverless-http';
import NextServer from 'next/dist/server/next-server';
 
const server = new NextServer({
  dev: false,
  dir: __dirname,
  conf: {}
});
 
export const handler = serverless(server.getRequestHandler());