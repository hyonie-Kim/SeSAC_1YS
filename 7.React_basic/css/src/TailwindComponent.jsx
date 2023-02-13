import React from "react";

export default function TailwindComponent() {
  return (
    <div>
      <h1 className="text-8xl">안녕!</h1>
      {/* 백그라운 블루에 진하기 500 */}
      <button className="bg-blue-500 rounded-xl px-2">Button</button>
    </div>
  );
}
