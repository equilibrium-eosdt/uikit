require("../styles/fonts.css");
require("../styles/theme.css");
require("../styles/reset.css");
//import type { Preview } from "@storybook/react";

const preview /*: Preview*/ = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

module.exports = preview;
