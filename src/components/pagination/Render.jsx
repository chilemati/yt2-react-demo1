import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Render = ({item}) => {
    let redir = useNavigate();
  return (
    <div className="">
        <div
          onClick={() => redir("/blog/" + item.id)}
          className="shadow mb-3 hover:bg-orange-200 hover:text-blue-500 rounded w-[50vw] py-2 px-4 "
          key={item.id}
        >
          <h5> {item.title} </h5>
          <p className="text-[8px]"> Author: {item.author} </p>
        </div>

    </div>
  );
};

export default Render;
