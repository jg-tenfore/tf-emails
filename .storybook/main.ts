import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/react-vite",
  "staticDirs": [
    { from: "../store-big/images", to: "/store-images" },
    { from: "../marketing-buck", to: "/marketing-images" }
  ],
  async viteFinal(config) {
    // @unlayer/react-elements ships an unguarded `process.env` reference that
    // throws "process is not defined" in the browser. The runtime shim in
    // .storybook/preview-head.html fixes it at the source; this build-time
    // define is a belt-and-suspenders replacement for the app transform.
    return mergeConfig(config, {
      define: { "process.env.IS_OFFLINE": "false" },
    });
  }
};
export default config;