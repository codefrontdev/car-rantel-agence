"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeButton from "../atoms/ThemeToggle";
import { Icon } from "../atoms/Icon";



const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme || "light";

  return (
    <ThemeButton  onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}>
      <Icon theme={currentTheme} />
    </ThemeButton>
  );
};

export default ThemeSwitcher;
