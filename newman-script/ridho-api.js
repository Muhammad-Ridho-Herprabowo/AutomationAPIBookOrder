const newman = require("newman")

newman.run({
    collection: "json-collection/ridho.postman_collection.json",
    environment: "json-env/ridho-environment.json",
    reporters: ["cli", "htmlextra"]
})
