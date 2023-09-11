import "./App.css";
import { ButtonSend } from "./components/ButtonSend/ButtonSend";
import { InputSend } from "./components/InputSend/InputSend";
import { ListSuggestionBox } from "./layout/ListSuggestionBox/ListSuggestionBox";

function App() {
  return (
    <>
      <ListSuggestionBox />
      <InputSend />
      <ButtonSend />
    </>
  );
}

export default App;
