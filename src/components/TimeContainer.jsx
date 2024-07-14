import React from "react";
import Timer from "./Timer";

const TimeContainer = () => {
  return (
    <div className="border-2 rounded-xl w-1/2 h-1/2 m-auto flex items-center justify-center flex-col">
      <div className="flex justify-center items-center mb-12">
        <img className="w-11 h-11 mx-2" src="/tomato.svg" alt="tomatoIcon" />
        <h1 className="text-6xl">TomatoQuest</h1>
      </div>
      <Timer />
    </div>
  );
};

export default TimeContainer;
