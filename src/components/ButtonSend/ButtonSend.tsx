import { SendIcon } from "../Icons";

export const ButtonSend = () => {
  return (
    <button className="bg-sky-900 rounded-full p-5 text-white rotate-[270deg] hover:bg-sky-800 transition-colors">
      <SendIcon />
    </button>
  );
};
