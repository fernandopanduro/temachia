import { useContext, useState } from "react";
import { MessageContext } from "../../context/MessageContext";
import { temach } from "../../services/Messages";
import { SendIcon } from "../Icons";

export const InputSend = () => {
  const [message, setMessage] = useState("");

  const messageContext = useContext(MessageContext);

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== "" && messageContext) {
      messageContext.addMessage({ remitente: "user", text: message });
      temach(message)
        .then(res => {
          if (res == null) throw new Error("Not found");
          messageContext.addMessage({ remitente: "temach", text: res });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => setMessage(""));
    }
  };

  // const [listOfMessages, setListOfMessages] = useState<
  //   { remitente: string; text: string }[]
  // >([]);

  // const addMessage = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (message.trim() !== "") {
  //     setListOfMessages(prevMessages => [
  //       ...prevMessages,
  //       { remitente: "user", text: message },
  //     ]);
  //     temach(message)
  //       .then(res => {
  //         if (res == null) throw new Error("Not found");
  //         setListOfMessages(prevMessages => [
  //           ...prevMessages,
  //           { remitente: "temach", text: res },
  //         ]);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setMessage("");
  //       });
  //   }
  // };

  return (
    <form
      className="stretch mx-2 flex flex-row gap-3 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
      onSubmit={handleAddMessage}>
      <div className="relative flex h-full flex-1 items-stretch md:flex-col">
        <div className="flex w-full items-center">
          <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
            <textarea
              id="prompt-textarea"
              tabIndex={0}
              rows={1}
              value={message}
              placeholder="Send a message"
              onChange={e => {
                setMessage(e.target.value);
              }}
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
              style={{
                maxHeight: "200px",
                height: "24px",
                overflowY: "hidden",
              }}></textarea>
            <button
              disabled={false}
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
