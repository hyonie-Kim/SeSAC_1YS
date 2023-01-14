# useState, useRef, Variable

3가지 타입에 대해서 정리해보자.

- 지금까지 배운 useState의 state 그리고 useRef의 ref와 리액트 내부의 변수가 렌더링에 따라 어떤식으로 변화하는지 알아보자.
- 세가지 버튼으로 각각 state/ref/variable 값을 올리는 컴포넌트를 구성해보자.
- 그리고 값의 변화 없이 컴포넌트 리렌더링을 위해서 하나의 버튼을 더 만들자.
- 각각의 버튼을 클릭하면서 해당 값의 변화에 대해 관찰하자.
- `src/components/Comparing.jsx` 참고

## 📝useRef

만약에 `Input` 태그를 사용해서 무언가를 입력 받는 상황을 그려보자.
이럴때 useState를 사용한다면, `Input`태그 자체가 계속 리렌더링 되어서 문제 + 낭비가 된다. 이럴때 사용하는 건 useRef이다.

- useRef를 사용하면 참조하고자 하는 DOM요소에 ref속성을 주고 해당 태그의 변화를 감지하거나 DOM요소를 컨트롤 할 수 있다.
- 보통은 컴포넌트에 존재하는 `input`의 값을 받거나 JS에서 DOM 요소를 관리하던 역할을 한다.

### 📕useRef로 구현하기

- useRef를 사용하여 변화를 감지하거나 DOM요소를 컨트롤 하고 싶은 태그에 ref속성을 부여한다.
- `src/components/TestRef.jsx` 참고

```jsx
const ref = useRef(value)
<input ref={ref} />
```

### 📕useRef로 값 확인

- useRef로 설정한 값을 console.log 확인

```javascript
const onChangeText = () => {
  console.log(inputValue);
  setText(inputValue.current.value);
};
```

### 📕useRef로 포커스 이동

- useRef가 자주 사용되는 포커스 사용법을 알아보자.
- 2개의 인풋 태그를 만들고 해당 인풋에 ref 속성 부여
- useRef로 각각 인풋의 속성 값을 변수에 담고 해당 변수를 통해 input 태그에 포커스를 부여해보자.
- 해당 값에 대한 접근은 current 객체를 통해 해야한다.
- `src/components/ChangeFocus.jsx` 참고

### 📕useRef로 DOM 컨트롤

- useRef로 선언한 변수를 DOM요소에 ref속성으로 부여하면 해당 요소에 접근할수 있다.
- VanillaJS의 querySelector 또는 getElementById 같은 역할을 손쉽게 구현 할수 있다 ->2개를 대체해서 사용이 가능하다.
- h1 태그를 2개 사용하고 useRef로 DOM 요소에 접근하여 해당 DOM 요소의 스타일을 변경한다.
- 인풋 태그를 초기화한다.
- `src/components/RefDOM.jsx` 참고

## 👩‍💻실습 useRef 활용

- `<div>`요소의 배경색을 직접 입력 받아서 변경하는 ColorInput.jsx 컴포넌트 만들기
- Input 창에 색을 압력하고 색 변경 버튼을 누르면 컴포넌트의 배경색이 변경되는 컴포넌트를 완성하기
- Input 값을 받는 것과 DOM 컨트롤은 useRef를 활용해서 구현해야 한다.

## 📝React.Fragment

- `src/components/ReactFragment.jsx` 참고
- 실제 리액트에서 컴포넌트를 조합할때, 최상위에 div를 사용하지 않고 반환해야만 하는 경우가 생긴다.
- CSS가 깨진다거나, 테이블 요소 사이에 div요소가 들어가면 에러가 뜨기 때문이다.
- 그럴 때 쓰는 것이 바로 `React.Fragment` 이다.

### 📕`<> </>`

- `<React.Fragment>`는 `<>`로 대체가 가능하다.

## 📝조건부 렌더링

컴포넌트를 상황에 따라 켜고 끄기!

- 상황에 따라서 컴포넌트를 보여줄지 여부를 정해야 할때가 있다.
- 그럴 때 사용한느 것이 조건부 렌더링이다.
- 이전 JS,HTML에서는 Display 속성을 none으로 처리하곤 했다.
- 리액트는 JSX문법을 사용하므로 if문 또는 3항 연산자, 논리 연산자와 HTML태그를 같이 쓰면 되기 때문에 상당히 쉽다.
- `src/components/Item.jsx` 참고
- ConditionalRender에서 조건부 렌더링
  - ConditionalRender.jsx에서 useState를 활용해서 condition에 따른 조건부 렌더링을 처리해보자.
  * Condition이 감추기이면 Item를 보여주고, 보이기이면 감춰준다.
  - 이럴땐, 보통 AND 연산자(&&)를 사용한다. **AND연산자는 두 피연산자가 모두 참일 때 `true`를 반환한다. 그외의 경우는 `false`를 반환한다.**
