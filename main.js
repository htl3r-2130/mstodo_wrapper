const { app, BrowserWindow } = require("electron");
const path = require("path");

app.setPath("userData", path.join(app.getPath("appData"), "mstodo"));
app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Microsoft ToDo",
    icon: path.join(__dirname, "icon.png"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.webContents.on("did-finish-load", () => {
    win.webContents.setZoomFactor(1.0);
  });
  win.loadURL("https://to-do.microsoft.com/tasks/");
  win.removeMenu();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
