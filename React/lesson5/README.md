# useState, useRef, Variable

## 📝useRef

- 무언가 컴포넌트가 리렌더링 되어도 값을 유지하고 싶을 때가 있다.
- 변수를 쓰면 -> 리렌더링 시 변수 값을 초기화된다. 이럴 때 사용하는 건 useRef이다.
- useRef를 사용하면 참조하고자 하는 DOM요소에 ref속성을 주고 해당 태그의 변화를 감지하거나 DOM요소를 컨트롤 할 수 있다.
- 보통은 컴포넌트에 존재하는 `input`의 값을 받거나 JS에서 DOM 요소를 관리하던 역할을 한다.

만약에 `Input` 태그를 사용해서 무언가를 입력 받는 상황을 그려보자.
이럴때 useState를 사용한다면, `Input`태그 자체가 계속 리렌더링 되어서 문제 + 낭비가 된다. 이럴때 사용하는 건 useRef이다.

```jsx
const ref = useRef(value)
<input ref={ref} />
```

### 📕useRef로 포커스 이동

- useRef가 자주 사용되는 포커스 사용법을 알아보자.
- 인풋 태그를 만들고 해당 인풋에 ref 속성 부여
- useRef로 각각 인풋의 속성 값을 변수에 담고 해당 변수를 통해 input 태그에 포커스를 부여해보자.
- 해당 값에 대한 접근은 current 객체를 통해야한다.

### 📕useRef로 DOM 컨트롤

- useRef로 선언한 변수를 DOM요소에 ref속성으로 부여하면 해당 요소에 접근할수 있다.
-
