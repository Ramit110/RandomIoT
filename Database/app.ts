import * as express from 'express';
import * as dgram from 'node:dgram';

/*
    variables
*/
const app = express();
const server = dgram.createSocket('udp4');

const exportPort = 27016;
const importPort = 27018;

/*
    
*/
app.get('/data/temp', (req, res) => {
    // Do something
})

app.listen(exportPort, () => {
  console.log(`Data exporter open on port ${exportPort}`);
})

/*

*/
server.on('error', (err) => {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.port}`);
});

server.bind(importPort, () => {
  console.log(`UDP import open on port ${importPort}`);
});