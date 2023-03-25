import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Diary from "./Diary";
import { IDiary, RootState } from "../global/global";

export default function Date() {
  const { date } = useParams<{ date: string }>();
  const allDiaries: IDiary[] = useSelector((state: RootState) => state.diaries);
  const diaries = allDiaries.filter((diary) => diary.date == date);

  return (
    <>
      <h2>{date}</h2>
      {diaries.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {diaries.map((diary) => (
            <Diary diary={diary} key={diary.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
