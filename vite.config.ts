import { defineConfig } from "vite";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

import react from "@vitejs/plugin-react-swc";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
});
