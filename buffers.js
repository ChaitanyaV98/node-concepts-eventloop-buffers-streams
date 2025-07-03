//buffers are those re objects that help you handle your binary data ex- image proccessing is done with buffer concept
//buffers handles file system operatns. Also helpful when we deal with crypographic data, when image processing

const buffOne = Buffer.alloc(10); //we are simply allocating buffer of 10 bytes -> which will initialise with all zeros
console.log(buffOne); // output will be <Buffer 00 00 00 00 00 00 00 00 00 00>

//creating a buffer out of string
const bufferFromString = Buffer.from("Chaitanya");
console.log(bufferFromString); // <Buffer 43 68 61 69 74 61 6e 79 61>

//buffer from array of integers
const bufferFromArrayOfIntegers = Buffer.from([1, 2, 3, 4, 5]);
console.log(bufferFromArrayOfIntegers); //<Buffer 01 02 03 04 05>

//writing to buffers
buffOne.write("Happy Node.js");
console.log(buffOne); //<Buffer 48 61 70 70 79 20 4e 6f 64 65>
console.log("After writing Happy Node.js to buffOne", buffOne.toString());

//some more operation

//reading first byte
console.log(bufferFromString[0]);

//concatinating buffers
const concatBuffers = Buffer.concat([buffOne, bufferFromString]);

//converting buffer to a json format
console.log(concatBuffers.toJSON());
