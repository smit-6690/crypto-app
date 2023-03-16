
const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('notifyBtn')
  
notifyBtn.add('click', function(_event) {
    //const modalPath = path.join('file://',__dirname, 'src/add.html')
    //const modalPath = path.join('src/add.html')
    const win = new BrowserWindow({ 
        frame: false, 
        transparent: true,
        alwaysOnTop: true, 
        width: 400, 
        height: 200 })
    win.on('close', function () { win = null })
    //win.loadURL(modalPath)
    win.loadFile('add.html')
    win.show()
  })

  