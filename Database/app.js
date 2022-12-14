"use strict";
exports.__esModule = true;
var express = require("express");
var dgram = require("node:dgram");
/*
    variables
*/
var app = express();
var server = dgram.createSocket('udp4');
var exportPort = 27016;
var importPort = 27018;
/*
    
*/
app.get('/data/temp', function (req, res) {
    // Do something
});
app.listen(exportPort, function () {
    console.log("Data exporter open on port ".concat(exportPort));
});
/*

*/
server.on('error', function (err) {
    console.error("server error:\n".concat(err.stack));
    server.close();
});
server.on('message', function (msg, rinfo) {
    console.log("server got: ".concat(msg, " from ").concat(rinfo.port));
});
server.on('listening', function () {
    var address = server.address();
    console.log("UDP import open on port ".concat(address.port));
});
server.bind(importPort, function () {
    console.log("UDP import open on port ".concat(importPort));
});
