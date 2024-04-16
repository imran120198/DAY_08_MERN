import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ThemeSwitcher from "../Context/ThemeSwitcher";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: theme.background,
        color: theme.text,
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div>
        <h3>Logo</h3>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
