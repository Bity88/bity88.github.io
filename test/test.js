//var funcs = [];
//for (var i = 0; i < 5; i++) {
//funcs[i] = function() {
//return i; // closure
//}
//};
//console.log(funcs[0]()); // 5
//console.log(funcs[1]()); // 5
//console.log(funcs[2]()); // 5
//console.log(funcs[3]()); // 5
//console.log(funcs[4]()); // 5 


(function() {

// old: 3 globals
// new: 0 globals!
var count = 0;
function incr(n) {
count += n;
}
function reset() {
count = 0;
}
incr(4);
incr(2);

console.log("count:"+count);
    
})();