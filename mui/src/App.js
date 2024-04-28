import "./App.css";
import MyButtons from "./components/MyButtons";
import MyTextField from "./components/MyTextField";
import MySelect from "./components/MySelect";
import MyAppBar from "./components/MyAppBar";
import MyMenuu from "./components/Menuu";

function App() {
  return (
    <div>
      <MyAppBar />
      <MyButtons />
      <MyTextField />
      <MySelect />
      <MyMenuu />
    </div>
  );
}

export default App;
