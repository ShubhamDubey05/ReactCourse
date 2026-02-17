import React from "react";
import  Progress  from "./Progress";
import Complete from "./Complete";
import Failed from "./Failed";
import New from "./New";

const Tasklist = ({ data }) => {
  return (
    <div
      className="mt-10 flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent"
    >
      {data.tasks.map((ele, index) => {
        if (ele.active) return <Progress key={index} data={ele} />;
        if (ele.complete) return <Complete key={index} data={ele} />;
        if (ele.failed) return <Failed key={index} data={ele} />;
        if (ele.isNew) return <New key={index} data={ele} />;
        return null;
      })}
    </div>
  );
};

export default Tasklist;
