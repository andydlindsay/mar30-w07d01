const increment = require('./functions');
const Counter = require('./classes');

console.log('-------- function ----------');
increment();
increment();
increment();
increment();
increment();
increment();

console.log('-------- classes ----------');
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
