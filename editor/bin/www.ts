#!/usr/bin/env node

import app from "../server/app"
import debug from "debug"

import * as http from "http"

debug("demo:server")

var port = normalizePort(process.env.PORT || "3000")

var server = http.createServer(app.callback())

server.listen(port)
server.on("error", onError)
server.on("listening", onListening)

function normalizePort(val: string) {
    var port = parseInt(val, 10)

    if (isNaN(port)) {
        // named pipe
        return val
    }

    if (port >= 0) {
        // port number
        return port
    }

    return false
}

function onError(error: Error) {
    if (error.name !== "listen") {
        throw error
    }

    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port

    // handle specific listen errors with friendly messages
    switch (error.message) {
        case "EACCES":
            console.error(bind + " requires elevated privileges")
            process.exit(1)
        case "EADDRINUSE":
            //   console.error(bind + ' is already in use');
            //   process.exit(1);
            server.listen(Number(port) + 1)
        default:
            throw error
    }
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + (addr as any).port
    debug("Listening on " + bind)
    console.log(`Editor server listening on http://localhost:${(addr as any).port}`)
}
