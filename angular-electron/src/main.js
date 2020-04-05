const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: "#FFF",
    //icon:'file://${__dirname}//assets/logo.png
  });
  win.loadURL(`file://${__dirname}/dist/index.html`);

  //uncomment to open dev tools
  //win.webContents.openDevTools();
  win.on("closed", function () {
    win = null;
  });

  app.on("ready", createWindow);
  app.on("window-all-closed", function () {
    // macos specific close process
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", function () {
    //macos specific process
    if (win === null) {
      createWindow();
    }
  });
}
