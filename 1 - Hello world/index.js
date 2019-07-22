const { start } = require("emvicify");
const settings = require("./settings.json");

start(__dirname, settings.port).then(() => {
    console.log("Listening on *" + settings.port);
}, err => {
    console.error("Application failed", err);
});