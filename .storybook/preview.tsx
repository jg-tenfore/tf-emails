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
        { name: "Email canvas", value: "#eceff3" },
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
        order: [
          "Introduction",
          "TenFore Partners",
          "Email Components",
          "TenFore Golf",
          "FloGolf Lounge",
          "Admin",
          // Marketing Buck — ordered by the golfer's lifecycle, from just-joined
          // down to a loyal lifetime member / club ambassador.
          "Marketing Buck",
          [
            "Welcome to the Club",
            "Weekend Warm-Up",
            "Twilight Twosome",
            "Instruction & Game Improvement",
            "Junior Camp Registration",
            "Senior League Registration",
            "Demo Day & Club Fitting",
            "Golf Shop Insider",
            "Dining & Clubhouse Highlights",
            "Mother's Day",
            "Father's Day",
            "Charity Scramble",
            "Front 9 Aeration",
            "Member Anniversary",
          ],
          "Email Templates",
          "Tenfore Branded",
        ],
      },
    },
  },
};

export default preview;
