import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { cloudflare } from "@cloudflare/vite-plugin";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react(), cloudflare()],
});
