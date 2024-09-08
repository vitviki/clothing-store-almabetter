const Title = ({ text1, text2, size }) => {
  //Title reusable component to show in the top  
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <p className={`${size} text-slate-500 capitalize`}>
        {text1} <span className="font-medium text-gray-700">{text2}</span>
      </p>
      <div className="w-8 sm:w-12 h-[2px] bg-gray-950"></div>
    </div>
  );
};

export default Title;
