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

### 👩‍💻실습55. useRef 활용

- `<div>`요소의 배경색을 직접 입력 받아서 변경하는 ColorInput.jsx 컴포넌트 만들기
- Input 창에 색을 압력하고 색 변경 버튼을 누르면 컴포넌트의 배경색이 변경되는 컴포넌트를 완성하기
- Input 값을 받는 것과 DOM 컨트롤은 useRef를 활용해서 구현해야 한다.

# React.Fragment

- `src/components/ReactFragment.jsx` 참고
- 실제 리액트에서 컴포넌트를 조합할때, 최상위에 div를 사용하지 않고 반환해야만 하는 경우가 생긴다.
- CSS가 깨진다거나, 테이블 요소 사이에 div요소가 들어가면 에러가 뜨기 때문이다.
- 그럴 때 쓰는 것이 바로 `React.Fragment` 이다.

### 📝`<> </>`

- `<React.Fragment>`는 `<>`로 대체가 가능하다.

# 조건부 렌더링

컴포넌트를 상황에 따라 켜고 끄기!

- 상황에 따라서 컴포넌트를 보여줄지 여부를 정해야 할때가 있다.
- 그럴 때 사용한느 것이 조건부 렌더링이다.
- 이전 JS,HTML에서는 Display 속성을 none으로 처리하곤 했다.
- 리액트는 JSX문법을 사용하므로 if문 또는 3항 연산자, 논리 연산자와 HTML태그를 같이 쓰면 되기 때문에 상당히 쉽다.
- `src/components/Item.jsx` 참고

## 📝ConditionalRender에서 조건부 렌더링

- ConditionalRender.jsx에서 useState를 활용해서 condition에 따른 조건부 렌더링을 처리해보자.
- Condition이 감추기이면 Item를 보여주고, 보이기이면 감춰준다.
- 이럴땐, 보통 AND 연산자(&&)를 사용한다.
- **AND연산자는 두 피연산자가 모두 참일 때 `true`를 반환한다. 그외의 경우는 `false`를 반환한다.**
- `src/components/ConditionalRender.jsx` 참고

### 📕변수로 처리해서 코드 정리

- 조건부 렌더링 자체를 변수에 넣어서 처리해보자.
- 이렇게 하면 코드가 깔끔해 지는 효과가 있다.
- 재사용에 유리하다.

### 👩‍💻실습57. 조건부 렌더링 처리

- PracticeOne, PracticeTwo 컴포넌트 만들기
- props로 데이터를 받아서 h1 태그로 출력하는 간단한 구조를 가진다.
- ExConditional.jsx에서 버튼을 클릭하면 PracticeOne과 PracticeTwo가 번갈아서 렌더링 되는 조건부 렌더링 처리하기
- 버튼의 컨텐츠도 렌더링 되는 컴포넌트 번호가 나오게 하면 된다.

# 컴포넌트의 Life Cycle

- 컴포넌트는 최초에 화면에 등장할 때 → Mount
- 컴포넌트의 state변화로 리렌더링 될 때 → Update
- 화면에서 사라질 떄 → Unmount
- 생명 주기를 가진다.

## 📝클래스형 컴포넌트의 Life Cycle

- 리액트의 장점은 이러한 상황에서 컴포넌트별 상태 관리 및 리렌더링에 있기 때문에 리액트는 Life Cycle에 대한 기능이 많다.
- 따라서 각각의 Life Cycle 상황에 맞게 특정 기능을 수행할 수 있도록 다양한 기능을 제공 했다.
- 리액트는 위와 같은 기능을 통해서 컴포넌트가 처음 불려 왔을때, 리렌더링 되었을때, 컴포넌트가 사라질 때 마다 특정한 기능을 수행 할 수 있도록 처리를 했다.

## 📝함수형 컴포넌트의 Life Cycle

- 하지만 우리 리액트에게 과거는 과거일 뿐 더 빠르고 편리한 미래만을 그린다.
- 따라서, 클래스형 컴포넌트에서 함수형 컴포넌트로 넘어가면서 기존의 Life Cycle을 담당하던 기능을 하나의 Hooks에 추가 시켰다.
- 바로 UseEffect이다.

# useEffect

**1.렌더링이 될때마다 실행**

```jsx
useEffect(() => {
  //작업...
});
```

**2.화면에 첫 렌더링 될떄 실행 value 값이 바뀔때 실행**

```jsx
useEffect(() => {
  //작업...
}, [value]);
```

**Clean Up 정리**

```jsx
useEffect(() => {
  // 구독...
  return () => {
    // 구독 해지...
  };
}, []);
```

### 코드로 확인해보기

- 지금은 버튼이 클릭되면 state 값의 변경이 일어나기 때문에 컴포넌트가 다시 렌더링이 되고, 그로 인해서 useEffect 내부의 함수가 실행되고 있다.
- 그럼 여기에다가 input 태그를 하나 추가하고, input 태그의 입력 내용이 h1태그에 출력되도록 코드를 변경해보자.
- `src/components/TestUseEffect.jsx` 참고
- 버튼이 클릭되면 state 값의 변경이 일어나기 때문에 컴포넌트가 다시 렌더링 되고, 그로 인해서 useEffect 내부의 함수가 실행 되고 있다.

## 📝useEffect의 Dependency Array

- useEffect는 두번째 인자로 Dependency Array를 받는다.
- 해당 Array에는 변수를 넣을 수가 있으며, 해당 변수가 변경 될 때에만 useEffect내부의 함수가 실행된다.
- +빈 배열[]을 넣으면 최초 마운트 시에만 실행 된다.
- 버튼을 클릭하면 Dependency로 count를 전달한 useEffect만 작동하고, 인풋에 값을 입력하면 Dependency로 value를 전달한 useEffect만 작동하게 된다.
- 물론 Dependency Arr를 전달하지 않은 경우는 렌더링 떄마다 실행

### Dependency Array를 전달하면?

- 두번째 인자 자체를 전달하지 않으면, 매번 렌더링 마다 실행이 되지만 빈 배열을 두번째 인자로 전달한다면?
- 아래 코드는 변화를 감지할게 없으므로 최초 마운트 시에만 실행이 된다.

```jsx
useEffect(() => {
  console.log('🎨최초 마운트 시에만 실행');
}, []);
```

## 📝useEffect Clean-Up

**컴포넌트 unmount에 실행되는 useEffect**

- 지금까지 useEffect를 컴포넌트가 마운트 되는 순간과 리렌더링 되는 순간에 적용하여 사용하는 방법을 배웠다.
- 그럼 컴포넌트가 Unmount되는 순간에는 어떻게 처리할까?
- 클래스형에서는 componentWillUnmount라는 메소드를 사용했지만 useEffect Hook에서는 useEffect의 리턴에 함수를 부여하면 된다.

### 코드로 확인해보기

- 간단한 Timer 컴포넌트 만들기
- 버튼을 클릭하면 setInterval 함수를 통해 1초에 한번씩 console.log를 찍는 컴포넌트이다.
- 그리고 해당 컴포넌트를 조건부 렌더링 처리하여 Mount와 Unmount를 시킬수 있도록 만들어 보자.
- `src/components/Timer.jsx` 참고

### Clean-up

- Unmount가 되면 실행되는 Clean-up을 이용, 타이머를 제거해준다.
- 기존의 useEffect코드에 return으로 Clean-up 함수를 지정해준다.
- Unmount가 되는 상황에서는 return에 인자로 전달한 함수가 실행이 되고 타이머가 정상 종료 된다.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('타이머 실행중');
  }, 1000);
  return () => {
    clearInterval(timer);
  };
}, []);
```

### 👩‍💻 실습58. 컴포넌트 타이머

- PracticeTimer라는 컴포넌트를 만든다.
- ExUnmount.jsx에는 '보이기'라는 버튼이 하나 있다. 해당 버튼을 클릭하면 PracticeTimer가 마운트 된다.
- 버튼을 클릭하면 PracticeTimer 컴포넌트가 마운트 되고 마운트 된 시간을 초단위로 기록하는 타이머가 실행된다.
- PracticeTimer에도 '시간'버튼이 존재하며, 해당 버튼을 누르면 지금까지 마운트가 된 시간을 출력해 준다.
- '보이기'버튼을 한번 더 클릭하면 PracticeTimer가 Unmount되고 타이머도 종료 되어야 한다.
  - 추가, '보이기' 버튼이 클릭되면 버튼 이름을 '숨기기'로 변경
  * 추가, 페이지가 처음 시작되면 '보이기'버튼에 포커스가 이동하도록 처리
