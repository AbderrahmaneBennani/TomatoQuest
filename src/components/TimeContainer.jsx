import React from "react";
import Timer from "./Timer";

const TimeContainer = () => {
  return (
    <div className="border-2 rounded-xl w-1/3 h-1/2 max-w-2xl flex items-center justify-center flex-col overflow-hidden">
      <div className="flex justify-center items-center mx-2 mb-12">
        <img className="w-8 xl:w-12 h-11" src="/tomato.svg" alt="tomatoIcon" />
        <h1 className="hidden md:block text-2xl xl:text-4xl mx-2">
          TomatoQuest
        </h1>
      </div>
      <Timer />
    </div>
  );
};

export default TimeContainer;
