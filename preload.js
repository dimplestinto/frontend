const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('axios', {
  openAI: (phrase) => ipcRenderer.invoke('axios.openAI', phrase)
});