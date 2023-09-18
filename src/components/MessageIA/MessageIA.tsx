import logo from "../../assets/images/logo.webp";
import { ClipboardIcon, LikeIcon, UnlikeIcon } from "../Icons";

export const MessageIA = ({ response }: { response: string }) => {
  return (
    <div
      className="group w-full text-token-text-primary border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]"
      data-testid="conversation-turn-3">
      <div className="p-4 justify-center text-base md:gap-6 md:py-6 m-auto">
        <div className="flex flex-1 gap-4 text-base mx-auto md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl }">
          <div className="flex-shrink-0 flex flex-col relative items-end">
            <img
              src={logo}
              alt="Temach IA Chat"
              loading="lazy"
              width="36"
              height="36"
              decoding="async"
              className="rounded-sm"
            />
          </div>
          <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
            <div className="flex flex-grow flex-col gap-3 max-w-full">
              <div className="min-h-[20px] flex flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words">
                <div className="markdown prose w-full break-words dark:prose-invert light">
                  {response}
                </div>
              </div>
            </div>
            <div className="flex justify-between lg:block">
              <div className="text-xs flex items-center justify-center gap-1 self-center pt-2 !invisible">
                <button
                  disabled={true}
                  className="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-3 w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <span className="flex-grow flex-shrink-0">1 / 1</span>
                <button
                  disabled={true}
                  className="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-3 w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
              <div className="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                <button className="flex ml-auto gap-2 rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                  <ClipboardIcon />
                </button>
                <div className="flex gap-1">
                  <button className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                    <LikeIcon />
                  </button>
                  <button className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                    <UnlikeIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
