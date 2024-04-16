import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import UserForm from "./Components/UserForm";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{
        background: theme.background,
        color: theme.text,
      }}
    >
      <Header />
      <UserForm />
    </div>
  );
}

export default App;
