import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'

export default class MainApp {
    constructor() {
        this.win = null;
        this.subscribeForAppEvents()
    }
    createWindow() {
        this.win = new BrowserWindow({
            title: CONFIG.name,
            maxWidth: CONFIG.maxWidth,
            width: CONFIG.width,
            minWidth: CONFIG.minWidth,

            maxHeight: CONFIG.maxHeight,
            height: CONFIG.height,
            minHeight: CONFIG.minHeight,
            show: false,
            webPreferences: {
                devTools: CONFIG.devTools,
                worldSafeExecuteJavaScript: true,
                preload: path.join(app.getAppPath(), 'preload', 'index.js')
            }
        })

        if (isDev) {
            this.win.webContents.openDevTools({ mode: "detach" })
        }
        else{
            this.win.removeMenu();
        }

        this.win.loadFile('renderer/index.html')

        this.win.webContents.on("did-finish-load", () => {
            this.win.show();
        })

        this.win.on('closed', () => {
            this.win = null
        })

        ipcMain.handle("loaded", () => {
            return {
                appName: CONFIG.name,
                electronVersion: process.versions.electron,
                nodeVersion: process.versions.node,
                chromiumVersion: process.versions.chrome
            }
        })
    }

    subscribeForAppEvents() {
        app.whenReady().then(()=>this.createWindow())

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow()
            }
        })
    }
}