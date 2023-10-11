package static

import (
	"fmt"
	"log"
	"net/http"
)

func Run(port uint64) {
	http.Handle("/", http.FileServer(http.Dir("./assets")))
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		log.Fatal(err)
	}
	log.Default().Printf("Listening on port: %d", port)
}
