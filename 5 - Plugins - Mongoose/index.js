const { start } = require("emvicify");
const settingsFile = require("./settings.json");
const expressSettings = {
    bodyParserJson: true,
    bodyParserUrlencoded: false,
    bodyParserRaw: false
};

start(__dirname, settingsFile.port, { settingsFile, expressSettings }).then(() => {
    console.log(`Listening on port ${settingsFile.port}`);
}, err => {
    console.error("Application failed", err);
});
