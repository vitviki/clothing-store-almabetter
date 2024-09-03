const Icons = ({ icon, text }) => {
  return (
    <div className="flex flex-col gap-1.5 justify-center items-center">
      {icon}
      <p className="text-xs font-bold">{text}</p>
    </div>
  );
};

export default Icons;
