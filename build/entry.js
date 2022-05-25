const path = require("path");
const settings = require("./settings");

const entries = {};
settings.routers.forEach((page) => {
  entries[page.name] = settings.pathEntry(page.path);
});

module.exports = entries;
