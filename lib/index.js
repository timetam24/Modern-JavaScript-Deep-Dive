function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

setTimeout(foo, 5 * 1000);
bar();