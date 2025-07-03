// streams are also objects that lets you read data from a source or write data to a destination

// streams are used for handling asyncronous data, Node.js has four types of streams:
//Readable	Used for reading data (e.g., fs.createReadStream())
//Writable	Used for writing data (e.g., fs.createWriteStream())
//Duplex	Can both read and write (e.g., sockets, TCP connections)
//Transform 	A special type of Duplex stream that can modify data as it passes through (e.g., gzip compression)

const fs = require("fs");
const zlib = require("zlib"); // module that nodejs provides which will help in compression
const crypto = require("crypto"); // module for encryption
const { Transform } = require("stream");

class EncryptStream extends Transform {
  constructor(key, vector) {
    super();
    (this.key = key), (this.vector = vector);
  }
  //this method is created, for each chunk of data via this stream we will do some transforming
  _transform(chunk, encoding, callback) {
    const cipher = crypto.createCipheriv("aes-256-cbc", this.key, this.vector);
    const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]); // this will encrypt the chunk that we are passing
    this.push(encrypted);
    callback();
  }
}

const key = crypto.randomBytes(32);

const vector = crypto.randomBytes(16);

const readableStream = fs.createReadStream("input.txt");

//new gzip object to compress the data
const gzipStream = zlib.createGzip();

const encryptStream = new EncryptStream(key, vector);

const writableStream = fs.createWriteStream("output.txt.gz.enc");

//read-> compress-> encrypt-> write

//here pipe method will do operations in a synchronous way

readableStream.pipe(gzipStream).pipe(encryptStream).pipe(writableStream);

console.log("reading-> compressing-> encrypting-> writing");
