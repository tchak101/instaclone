import React from "react";

function Story({ img, username }) {
  return (
    <div>
      <div className=" relative h-14 w-14 rounded-full p-[1.5px] 
       border-red-500 border-2 overflow-hidden object-contain 
       cursor-pointer hover:scale-110 transition-transform duration-200 ease-out">
        <img src={img} layout="fill" objectFit="cover" alt="profile pic" />
      </div>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
