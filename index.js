// example string built in method
const someStr = "hello";
someStr.charAt(0); // result 'h'
someStr.indexOf("e"); // result 1
someStr.indexOf("e", 2); // result -1
someStr.repeat(2); // result hellohello
someStr.split(""); // result ['h','e','l','l','o']


const arr = [1,2,3];
arr.at(0);
arr.filter((v)=>{ return v === 2 });
arr.join("");
arr.reverse();
arr.slice(0,1);

const dt = new Date();
Date.now();
dt.getDay();
dt.getFullYear();
dt.toJSON();
dt.getSeconds();

const map = new Map();
map.clear();
map.has("somekey");
map.keys();
map.set("somekey", "someval");
map.getOrInsert("somekey", "default val");

const set = new Set();
const anotherSet = new Set();
set.add("value");
set.difference(anotherSet);
set.intersesction(anotherSet);
set.union(anotherSet);
set.entries();

// JS built in function
eval("1 + 1");
isNaN("a" / 1);
parseFloat(1);
const encUri = encodeURI("http://example.com");
const original = decodeURI(encUri);
