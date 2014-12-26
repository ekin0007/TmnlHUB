var sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('../db');

console.log(db);

process.argv.forEach(function(val, index) {
    console.log(index + ': ' + val);
});