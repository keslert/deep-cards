import Icon from "./icons/Submarine";

export default ({ card: { number, text } }) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg p-2 overflow-hidden w-[250px] h-[350px] shadow-2xl">
      <div className="p-3 rounded-2 h-full flex flex-col">
        <div className="flex-1">
          <div className="w-4 h-[2px] bg-gray-800 my-2" />
          <p className="font-bold">{text}</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 bottom-[-150px]">
            <Icon size={350} fill="rgba(0,0,0,0.03)" />
          </div>
          <p className="text-gray-400 tc text-xs">Deep Cards</p>
          <div className="absolute right-0 bottom-0 text-xs text-gray-400">
            #{number}
          </div>
        </div>
      </div>
    </div>
  );
};
