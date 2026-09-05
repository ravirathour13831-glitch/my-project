function outer() {
    let a = 5;
    function inner() {
        console.log(a);

    }
    return inner;

}
const innerFunc = outer();
innerFunc()
function outer2() {
    function inner2() {
        count++;
        console.log(count);
    }
    let count = 0;

    return inner2;
}
const innerFunc2 = outer2();
innerFunc2();
innerFunc2();

             