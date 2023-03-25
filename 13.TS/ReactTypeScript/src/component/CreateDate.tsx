import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IDiary, RootState } from "../global/global";

export default function CreateDate() {
  const dates: IDiary[] = useSelector((state: RootState) => state.dates);
  const inputRef = useRef<HTMLInputElement>(null); //인풋태그로 넣는다는 타입 정의, Ref는 null넣어줘야함
  const dispatch = useDispatch();

  function addDay() {
    if (inputRef.current == null) return false;

    const data = {
      id: dates.length + 1,
      date: inputRef.current.value,
    };

    dispatch({ type: "DAY/WRITE", payload: data });
  }
  return (
    <div>
      <h3>현재 일수 : {dates.length}일</h3>
      <input type="text" ref={inputRef} placeholder="0000-00-00" />
      <button onClick={addDay}>날짜 추가</button>
    </div>
  );
}
