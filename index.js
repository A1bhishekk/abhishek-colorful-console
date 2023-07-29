class Log {

    static info(message) {
        console.log(`%c${message}`, `color: blue; font-weight: bold;`);
    }
    static success(message) {
        console.log(`%c${message}`, `color: green; font-weight: bold;`);
    }
    static warning(message) {
        console.warn(`%c${message}`, `color: yellow; font-weight: bold;`);
    }
    
    static error(message) {
        console.error(`%c${message}`, `color: red; font-weight: bold;`);
    }
}


module.exports = {Log};