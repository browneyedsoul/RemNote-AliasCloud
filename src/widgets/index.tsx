import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let CloudCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
	await fetch("https://raw.githubusercontent.com/browneyedsoul/RemNote-AliasCloud/main/src/snippet.css")
    .then((response) => response.text())
    .then((text) => {
      CloudCSS = text;
      console.log("Alias Cloud!");
    })
    .catch((error) => console.error(error));
  await plugin.app.registerCSS("callout", CloudCSS);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);