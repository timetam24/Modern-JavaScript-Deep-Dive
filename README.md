## 42.1 동기처리와 비동기처리
---

<br/>

### 1. 동기처리
+ 자바스크립트 엔진은 **싱글 스레드 방식**으로 동작한다.
+ 싱글 스레드 방식은 한 번에 하나의 태스크만 실행할 수 있기 때문에 처리에 시간이 걸리는 태스크를 실행하는 경우 <u>블로킹(작업 중단)</u>이 발생한다.

<br />
<br />


 예제 : sleep 함수는 10초 후에 foo 함수를 호출한다. 이 때 bar 함수는 sleep 함수의 실행이 종료된 후 호출되므로 10초 이상 
블로킹된다.

<pre><code>function sleep(func, delay) {
    const delayUntil = Date.now() + delay;
    while(Date.now() < delayUntil);
    func();
}

function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

sleep(foo, 10 * 1000);
bar()
</code></pre>


<br/>
<br/>

이처럼 <u>현재 실행 중인 태스크가 종료할 때까지 다음에 실행될 태스크가 대기하는 방식</u>을 동기 처리라고 한다.   

+ 장점: 태스크를 순서대로 하나씩 처리하여 실행 순서가 보장된다. 
+ 단점: 앞선 태스크가 종료할 때까지 이후 태스크들이 블로킹된다.
 




