import { Devvit } from "@devvit/public-api";
import { defineConfig } from "@devvit/server";
import "../server/index";

defineConfig({
  name: "Web View Example",
  description: "A barebones WebView example",
  entry: "index.html",
  height: "tall",
  inline: true,
  menu: {
    enable: true,
    label: "Web View Example",
    postTitle: "Web View Example",
  },
});

export default Devvit;
