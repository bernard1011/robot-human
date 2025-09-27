const Purpose = ({num, word}) => {
  return (
    <div className="flex gap-3 w-max bg-orange-300/40 px-3 py-2 border-orange-500 border rounded-3xl items-center">
      <span className="bg-orange-500 rounded-full px-2 py-1 text-sm text-white">{num}</span>
      <p className="text-orange-400">{word}</p>
    </div>
  );
};

export default Purpose;