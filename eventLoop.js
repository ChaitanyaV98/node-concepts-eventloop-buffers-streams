// event loop - Event loop is a core concept in nodejs that allows it to handle asynchronous operations- like I/O tasks without blocking on a single thread

// timers -> executes callbacks -> pending callbacks -> idle, prepare (these will be internally handled by nodejs) -> poll(retrive new i/p o/p events and execute  new i/p o/p related callbacks) -> check (which actually executes setImmedeate callback  ) -> close callback
// microtask - which executes immedeatly after the current operation completes ex. process.nextTick, promises, object.obeserve
// macrotask - macrotask are those tasks that gets executed in the next iteration of event loop ex- setTimeout, setInterval, setImmedeate

const fs = require("fs");
const crypto = require("crypto");

console.log("1. script start");
setTimeout(() => {
  console.log("2.settimeout 0s callback -> macrotask");
}, 0);

setTimeout(() => {
  console.log("3.settimeout 0s callback -> macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("5. Promise resolved-> this is a micro task");
});

process.nextTick(() => {
  console.log("6. process.nexttick callback-> microtask");
});

fs.readFile(__filename, () => {
  console.log("7. File  read operation (I/O callback)");
});

crypto.pbkdf2("secret", "salt", 10000, 64, "sha512", (err, key) => {
  if (err) throw err;
  console.log("8. pbkdf2 operation completed (CPU Intensive task)");
});

console.log("9. Script ends");

//OUTPUT
// 1. script start
// 9. Script ends
// 6. process.nexttick callback-> microtask
// 5. Promise resolved-> this is a micro task
// 2.settimeout 0s callback -> macrotask
// 3.settimeout 0s callback -> mac rotask
// 4. setimmedeate check phase
// 7. Fileread operation (I/O callback)
// 8. pbkdf2 operation completed (CPU Intensive task)
