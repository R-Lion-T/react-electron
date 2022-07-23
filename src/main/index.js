import MainApp from './MainApp'
import { checkForUpdates } from './updater';
import { app } from 'electron';

const lock = app.requestSingleInstanceLock();

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
    // setTimeout(checkForUpdates, 2000)
}
