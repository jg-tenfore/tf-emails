import type { Preview } from "@storybook/react-vite";
import "@/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    backgrounds: {
      default: "Email canvas",
      values: [
        { name: "Email canvas", value: "#f5f5f4" },
        { name: "White", value: "#ffffff" },
        { name: "Dark", value: "#0c0e12" },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Introduction", "Foundations", "Email Components", "Emails"],
      },
    },
  },
};

export default preview;
