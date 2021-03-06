const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 400,
    title: 'Pill',
    titleBarStyle: "hidden",
    resizable: false,
    fullscreenable: false
  });

  // Check if in being supplied webpack url, if not, serve the static files
  const SOURCE_URL =
    process.env.SOURCE_URL ||
    url.format({
      pathname: path.join(__dirname, "/build/index.html"),
      protocol: "file:",
      slashes: true
    });

  // Load the source url
  mainWindow.loadURL(SOURCE_URL);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // mainWindow.webContents.on("will-navigate", (e, url) => { 
  //   e.preventDefault();
  // })

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
