import { FC, ReactNode, createContext, useState } from "react";

interface Message {
  remitente: string;
  text: string;
}

interface MessageContextProps {
  listOfMessages: Message[];
  addMessage: (message: Message) => void;
}

const MessageContext = createContext<MessageContextProps | undefined>(
  undefined
);

interface MessageProviderProps {
  children: ReactNode;
}

const MessageProvider: FC<MessageProviderProps> = ({ children }) => {
  const [listOfMessages, setListOfMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setListOfMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <MessageContext.Provider value={{ listOfMessages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
