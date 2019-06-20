// npm install -g babel-cli
// npm install babel-preset-env@1.6.1
// babel src/index.js --out-file public/scripts/bundle.js --presets env

const name = 'Louis';
console.log(name);

class Hangman {
    myMethod() {
        return 'Testing';


    }
}

const hangman = new Hangman();
console.log(hangman.myMethod());