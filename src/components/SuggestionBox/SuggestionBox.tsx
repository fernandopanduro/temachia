import { SendIcon } from "../Icons";

interface Props {
  title: string;
  text: string;
}

export const SuggestionBox: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-3 transition-colors px-1 py-1 hover:bg-[rgba(255,255,255,.1)]">
      <div data-projection-id="41">
        <button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 md:whitespace-normal">
          <div className="flex w-full gap-2 items-center justify-center">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col overflow-hidden">
                <div className="truncate font-semibold">{title}</div>
                <div className="truncate opacity-50">{text}</div>
              </div>
              <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-3 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
                <span className="" data-state="closed">
                  <SendIcon />
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
