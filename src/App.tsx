import "./App.css";
import { InputSend } from "./components/InputSend/InputSend";
import { MessageIA } from "./components/MessageIA/MessageIA";
import { MessageUser } from "./components/MessageUser/MessageUser";
import { ListSuggestionBox } from "./layout/ListSuggestionBox/ListSuggestionBox";

function App() {
  const isMessage = true;

  return (
    <div className="w-full h-full relative flex z-0">
      <div
        className="dark flex-shrink-0 bg-gray-900"
        data-projection-id="43"
        style={{ width: "260px", visibility: "visible" }}>
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col ">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <h2>Chat history</h2>
              <nav
                className="flex h-full w-full flex-col p-2"
                aria-label="Chat history">
                <div className="mb-1 flex flex-row gap-2">
                  <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-grow overflow-hidden">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-4 w-4 shrink-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span className="truncate">New chat</span>
                  </a>
                  <span className="" data-state="closed">
                    <a className="flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                      </svg>
                      <span>Close sidebar</span>
                    </a>
                  </span>
                </div>
                <div className="absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500 invisible max-h-0">
                  <div className="bg-gray-900 px-4 py-3">
                    <div className="p-1 text-sm text-gray-100">
                      Chat History is off for this browser.
                    </div>
                    <div className="p-1 text-xs text-gray-500">
                      When history is turned off, new chats on this browser
                      won't appear in your history on any of your devices, be
                      used to train our models, or stored for longer than 30
                      days.{" "}
                      <strong>
                        This setting does not sync across browsers or devices.
                      </strong>{" "}
                      <a
                        href="https://help.openai.com/en/articles/7730893"
                        target="_blank"
                        className="underline"
                        rel="noreferrer">
                        Learn more
                      </a>
                    </div>
                    <button className="btn relative btn-primary mt-4 w-full">
                      <div className="flex w-full gap-2 items-center justify-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                          <line x1="12" y1="2" x2="12" y2="12"></line>
                        </svg>
                        Enable chat history
                      </div>
                    </button>
                  </div>
                  <div className="h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"></div>
                </div>
                <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto">
                  <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                    <div>
                      <span>
                        <div className="relative" data-projection-id="44">
                          <ol></ol>
                        </div>
                      </span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-2 empty:hidden">
                  <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-800 rounded-md">
                    <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                      <span className="gold-new-button flex items-center gap-3">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-4 w-4 shrink-0"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Upgrade to Plus
                      </span>
                      <span className="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">
                        NEW
                      </span>
                    </span>
                  </a>
                  <div className="group relative" data-headlessui-state="">
                    <button
                      className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-state="closed"
                      id="headlessui-menu-button-:r39:"
                      data-headlessui-state="">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded">
                          <div className="relative flex">
                            <img
                              alt="User"
                              loading="lazy"
                              width="36"
                              height="36"
                              decoding="async"
                              data-nimg="1"
                              className="rounded-sm"
                              src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtcgFf_sfkb0cwuPv01FUUSpZ5EZ0TPoWEaMQuAeAtl73PCl%3Ds96-c&amp;w=96&amp;q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
                        <div className="font-bold">Fernando Panduro</div>
                        <div className="text-xs text-gray-500"></div>
                      </div>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4 flex-shrink-0 text-gray-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end relative h-full max-w-full flex-1 overflow-hidden">
        <div className="text-white flex flex-col text-sm dark:bg-gray-800">
          <MessageUser />
          <MessageIA />
        </div>

        <div>
          {isMessage ? "" : <ListSuggestionBox />}
          <InputSend />
        </div>
      </div>
    </div>
  );
}

export default App;
