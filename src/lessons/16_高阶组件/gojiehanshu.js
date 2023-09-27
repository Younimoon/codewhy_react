// 高阶函数 
// 1 以函数作为函数参数
// 其他自行了解
function fun() {
    console.log("fun function");
}
fun()

function fun2() {
    console.log("foo function");
    setTimeout(() => {
        fun()
    }, 2000)
}
fun2(fun)