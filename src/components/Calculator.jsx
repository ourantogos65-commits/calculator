export const Calculator = ({ isPrimary, children }) => {
  return (
    <button
      className={`h-[42px] w-[90px] rounded-4xl  shadow-[0_0_15px_rgba(0,255,225,0.8)] hover:scale-90 transition transform ${
        children === "=" ? "" : ""
      }  ${
        isPrimary
          ? "bg-[#18191c] text-[#bfbfbf]"
          : "bg-[#4b5371] text-[#bfbfbf]"
      } `}
    >
      {children}
    </button>
  );
};
