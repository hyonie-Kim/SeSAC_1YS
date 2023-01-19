// 초기 상태 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

let counts = initState.list.length;
initState['nextID'] = counts;

// 액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// 액션 생성 함수 설정 - 컴포넌트로 받아온 애를 payload 데이터를 옮기는 역할을 함
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  // 아이디 값만 받아오면됨
  return {
    type: DONE,
    id,
  };
}

// 리듀서 - 액션은 위에 함수임 done, crate
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      console.log('CREATE!!');
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
