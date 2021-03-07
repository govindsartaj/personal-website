import { createRef } from 'react'

export default function Tooltip({ children, tooltipText }) {
  const tipRef = createRef(null);
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginRight = "20px";
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginRight = "10px";
  }
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute flex items-center w-24 px-2 py-1 text-white transition-all duration-150 rounded opacity-0 whitespace-nowrap dark:text-darkbg bg-darkbg dark:bg-white right-full"
        ref={tipRef}
      >
        <div
          className="absolute w-3 h-3 -rotate-45 bg-darkbg dark:bg-white"
          style={{ right: "-6px", transform: "rotate(-45deg)" }}
        />
        {tooltipText}
      </div>
      {children}
    </div>
  );
}
