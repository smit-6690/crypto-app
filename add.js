import { remote as _remote } from 'electron'
import path from 'path'
const remote = _remote

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    window.close();
})