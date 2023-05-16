const { contextBridge, ipcRenderer} = require('electron');
const Toastify = require('toastify-js');

contextBridge.exposeInMainWorld('axios', {
  openAI: (phrase) => ipcRenderer.invoke('axios.openAI', phrase)
});

contextBridge.exposeInMainWorld('Toastify', {
  showToast: (options) => Toastify(options).showToast()
});