package main

import (
	"flag"
	"log"
	"servers/static"
)

func main() {
	var path string
	var port uint64

	flag.StringVar(&path, "path", "assets", "path to location where static files are read from")
	flag.Uint64Var(&port, "port", 8082, "port the server should listen on")
	flag.Parse()

	log.Printf("path: %s ", path)
	log.Printf("port: %d", port)

	static.Run(port)
}
