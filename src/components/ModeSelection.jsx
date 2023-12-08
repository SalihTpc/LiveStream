import React from "react";

const ModeSelection = ({ setMode }) => {
  return (
    <div className="absolute flex items-center flex-col justify-center right-3 gap-2">
      <p
        className="p-3 text-center text-white cursor-pointer bg-slate-500 w-16 rounded-xl"
        onClick={() => setMode(false)}
      >
        64
      </p>
      <hr />
      <p
        className="p-3 text-center text-white cursor-pointer bg-slate-500 w-16 rounded-xl"
        onClick={() => setMode(true)}
      >
        16X4
      </p>
    </div>
  );
};

export default ModeSelection;
