// create a map

const map0 = new Map(); // an empty map
console.log(map0);

// // create a set
let map1 = new Map();
// insert key -value pair
map1.set('info',{name : 'jack', age : 26});
console.log(map1);

// map with object key
let map2 = new Map();
let obj ={};
map2.set(obj, {name : 'jerry', age : "26"});
console.log(map2);

// // access the elements of a map 
// // you can access Map elements using the get() method
 let map3 = new Map();
 map3.set('info', {name:'jack', age : "27"});
 console.log(map3.get('info'));
 // to show that the set is true or false we use has()
 let map4 = new Map();
 map4.set('info', {name : 'Jack', age : "27"});
 console.log(map4.has('info'));