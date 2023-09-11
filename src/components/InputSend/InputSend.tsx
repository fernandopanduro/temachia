import { SendIcon } from "../Icons";

export const InputSend = () => {
  return (
    <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
      <div className="relative flex h-full flex-1 items-stretch md:flex-col">
        <div className="flex w-full items-center">
          <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
            <textarea
              id="prompt-textarea"
              tabIndex={0}
              data-id="root"
              rows={1}
              placeholder="Send a message"
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
              style={{
                maxHeight: "200px",
                height: "24px",
                overflowY: "hidden",
              }}></textarea>
            <button
              disabled={true}
              className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
              data-testid="send-button">
              <span className="" data-state="closed">
                <SendIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
