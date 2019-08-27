const { start } = require("emvicify");
const settings = require("./settings.json");

start(__dirname, settings.port, {
    settingsFile: settings,
    expressSettings: {
        json: true
    }
}).then(() => {
    console.log(`Listening on port ${settings.port}`);
}, err => {
    console.error("Application failed", err);
});
