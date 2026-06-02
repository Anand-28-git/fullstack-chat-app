import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedFontSize = localStorage.getItem("chat-font-size");
  const parsedFontSize = savedFontSize ? parseInt(savedFontSize, 10) : 16;
  const initialFontSize = isNaN(parsedFontSize) ? 16 : parsedFontSize;

  return {
    theme: localStorage.getItem("chat-theme") || "coffee",
    fontSize: initialFontSize,
    setTheme: (theme) => {
      localStorage.setItem("chat-theme", theme);
      set({ theme });
    },
    setFontSize: (fontSize) => {
      localStorage.setItem("chat-font-size", fontSize.toString());
      set({ fontSize });
    },
    resetFontSize: () => {
      localStorage.setItem("chat-font-size", "16");
      set({ fontSize: 16 });
    },
  };
});
