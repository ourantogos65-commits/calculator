export const Newpage = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-10 rounded-2xl active: bg-pink-200"
    >
      {text}
    </button>
  );
};
