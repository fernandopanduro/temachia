import { useContext, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ClosedIcon } from "../../components/Icons";
import { InputSend } from "../../components/InputSend/InputSend";
import { MessageIA } from "../../components/MessageIA/MessageIA";
import { MessageUser } from "../../components/MessageUser/MessageUser";
import { ModalPay } from "../../components/ModalPay/ModalPay";
import { MessageContext } from "../../context/MessageContext";
import { ListSuggestionBox } from "../../layout/ListSuggestionBox/ListSuggestionBox";
import { auth } from "../../utils/firebase";

const Home = () => {
  const dummy = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [showModalPay, setShowModalPay] = useState(false);

  const [user] = useAuthState(auth);

  const photo = user?.photoURL;
  const username = user?.displayName;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    } else {
    }
  }, [user]);

  const messageContext = useContext(MessageContext);
  if (!messageContext) return null;
  const { listOfMessages } = messageContext;

  useEffect(() => {
    if (dummy.current === undefined) return;
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [listOfMessages]);

  return (
    <div className="w-full min-h-[100vh] relative flex z-0 bg-gray-800">
      <div
        className="dark flex-shrink-0 h-screen bg-gray-900 absolute md:sticky top-0 z-50 transition-all"
        style={
          showMenu
            ? { width: "260px", visibility: "visible" }
            : { width: "0", visibility: "hidden" }
        }>
        <div className="h-full">
          <div className="flex h-full min-h-0 flex-col ">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <nav
                className="flex h-full w-full flex-col p-4"
                aria-label="Chat history">
                <div className="mb-1 flex flex-row gap-2">
                  <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-grow overflow-hidden">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 shrink-0"
                      height="1em"
                      width="1em">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span className="truncate">New chat</span>
                  </a>
                  <a
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                    <ClosedIcon />
                  </a>
                </div>
                <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto ">
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
                  <a
                    onClick={() => setShowModalPay(!showModalPay)}
                    className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-800 rounded-md">
                    <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                      <span className="gold-new-button flex items-center gap-3">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 shrink-0"
                          height="1em"
                          width="1em">
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
                      className="flex w-full items-center gap-3 rounded-md text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800"
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
                              src={photo ?? "null"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
                        <div className="font-bold">{username}</div>
                        <div className="text-xs text-gray-500"></div>
                      </div>
                    </button>
                  </div>
                  <a
                    onClick={() => auth.signOut()}
                    className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-800 rounded-md">
                    <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                      <span className="gold-new-button flex items-center gap-3">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 shrink-0"
                          height="1em"
                          width="1em">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Sign Out
                      </span>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="absolute left-2 top-2 z-10 hidden md:inline-block"
        style={{ opacity: 1 }}>
        <span className="" data-state="closed">
          <button
            aria-label="Open sidebar"
            className="flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-black dark:text-white"
              height="1em"
              width="1em">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
        </span>
      </div>
      <div className="w-full flex flex-col justify-between relative max-w-full flex-1 ">
        <div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white">
            <span className="sr-only">Open sidebar</span>
            <ClosedIcon />
          </button>
          <h1 className="flex-1 text-center text-base font-normal">New chat</h1>
          <button type="button" className="px-3">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>

        <div className="w-full flex flex-col justify-between relative max-w-full flex-1">
          <div className="text-white flex flex-col text-sm dark:bg-gray-800">
            {listOfMessages.map((message, index) => {
              return message.remitente === "user" ? (
                <MessageUser key={index} message={message.text} />
              ) : (
                <MessageIA key={index} response={message.text} />
              );
            })}
          </div>

          <h1 className="uppercase absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl font-bold text-white/20 mix-blend-difference">
            Temach IA
          </h1>

          <div className="py-3 md:py-5 h-auto" ref={dummy}>
            {listOfMessages.length > 0 ? "" : <ListSuggestionBox />}
            <InputSend />
          </div>
        </div>
      </div>
      <ModalPay showModalPay={showModalPay} setShowModalPay={setShowModalPay} />
    </div>
  );
};

export default Home;
