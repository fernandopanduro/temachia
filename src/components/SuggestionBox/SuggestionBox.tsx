import { SendIcon } from "../Icons";

export const SuggestionBox = () => {
  return (
    <article className="flex justify-between items-center text-white border-2 border-white rounded p-3 cursor-pointer hover:bg-slate-700 transition-colors">
      <div className="">
        <h3 className="font-bold">White text</h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod?
        </p>
      </div>
      <div className="rotate-[270deg]">
        <SendIcon />
      </div>
    </article>
  );
};
