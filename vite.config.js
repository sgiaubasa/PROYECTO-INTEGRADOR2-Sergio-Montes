import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 👇 Esto le enseña a Sass a entender el alias "@"
                includePaths: [path.resolve(__dirname, "src")],
            },
        },
    },
});