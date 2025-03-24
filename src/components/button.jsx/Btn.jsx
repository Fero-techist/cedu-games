import React from "react";

export function Btn({ children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-[#8149BE] w-40 text-white px-4 py-3 rounded-md"
      >
        {children}
      </button>
    </>
  );
}

export function RedBtn({ children, onClick }) {
  return (
    <>
      <button
        className="bg-[#E3403333] w-40 text-[#E34033] px-4 py-3 rounded-md"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export function RoundedBtn({ children, onClick }) {
  return (
    <>
      <button
        className="rounded-full text-white py-[16px] bg-[#5002D0] w-[480px] h-[60px] mt-10 text-[16px] font-[]"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export function SmallRoundedBtn({ children, onClick }) {
  return (
    <>
      <button
        className="rounded-full text-white py-[16px] bg-[#5002D0] w-[214px] h-[60px] mt-10 text-[16px] font-[]"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
