import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('MessagesAPI', {
  onLoaded: () => {
    return new Promise(resolve =>{
      ipcRenderer.invoke('loaded').then((props=>{
        resolve(props)
      }))
    })
  }
})
