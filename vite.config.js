import reactRefresh from "@vitejs/plugin-react-refresh";
import reactRouter from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactRouter()],
});
