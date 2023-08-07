/**
    尾调用优化，只保留内层函数的调用记录
    如下述代码，m，n在调用前已经被确定，可以完全删除f()的调用记录，只保留g(3)的调用记录
*/
function f() {
    let m = 1; 
    let n = 2; 
    return g(m + n); 
} 
f(); 

// 等同于 
function f() { 
    return g(3); 
} 
f(); 

// 等同于 
g(3);

/* 
    尾递归：尾调用自身
    对于尾递归来说，由于只存在一个调用记录，所以不会发生栈溢出
*/

function factorial(n) { 
    if (n === 1) return 1; 
    return n * factorial(n - 1); 
} 
factorial(5) // 120

/* 使用尾递归 */
function factorial(n, total) { 
    if (n === 1) return total; 
    return factorial(n - 1, n * total); 
} 
factorial(5, 1) // 120