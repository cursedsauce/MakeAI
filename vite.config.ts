import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// relative base: the site works under https://<user>.github.io/<repo>/ as well as at a domain root
export default defineConfig({ base: "./", plugins: [react()] })
