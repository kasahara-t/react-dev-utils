import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
    },
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    const customConfig = {
      css: {
        postcss: path.resolve(__dirname, "../config/postcss.config.js"),
      }
    };
    return mergeConfig(config, customConfig);
  }
};
export default config;
