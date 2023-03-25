import MainApp from './MainApp'
import { checkForUpdates } from './updater';
import { app } from 'electron';
import isDev from 'electron-is-dev';
const lock = app.requestSingleInstanceLock();
console.log(isDev)
if (!lock) {
    app.quit();
} else {
   const main = new MainApp();
    app.on('second-instance', () => {
        if (main.win) {
            if (main.win.isMinimized()) {
                main.win.restore()
            }
            main.win.focus()
        }
    })
    if(isDev){
        setTimeout(checkForUpdates, 2000)
    }
}
