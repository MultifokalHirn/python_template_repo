import * as React from "react";

import { defineConfig } from "vocs";

export default defineConfig({
  iconUrl: {
    light: "/safari-pinned-tab.svg",
    dark: "/safari-pinned-tab.svg",
  },
  logoUrl: {
    light: "/apple-touch-icon.png",
    dark: "/apple-touch-icon.png",
  },
  description: "Lorem ipsum.",
  title: "python_template_repo",
  blogDir: "./pages/blog",
  socials: [
    {
      icon: "github",
      link: "https://github.com/MultifokalHirn/python_template_repo",
    },
  ],
  sidebar: [
    {
      text: "Documentation",
      link: "/docs",
    },
    {
      text: "Project Structure",
      link: "/docs/structure",
    },
  ],
});
