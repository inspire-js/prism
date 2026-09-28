import Prism from "prismjs";
import Inspire from "@inspirejs/core";

// Opt out of highlighting for elements in .prism-ignore
Prism.hooks.add("before-all-elements-highlight", env => {
	env.elements = env.elements.filter(e => !e.closest(".prism-ignore"));
});

// Highlight code added after load, e.g. rendered from Markdown
document.addEventListener("inspire-domchanged", evt => {
	Prism.highlightAll({ root: evt.target });
});

// Highlight each slide again when it first shows.
// Plugins such as line-highlight measure the code, and a hidden slide measures 0.
// Doing it twice is safe, because line-highlight first removes the .line-highlight elements it added before.
Inspire.hooks.add("slidechange", ({ slide, firstTime }) => {
	if (firstTime) {
		Prism.highlightAll({ root: slide });
	}
});

// Prism loads plugins, and the plugins they require, but not their stylesheets
let base = import.meta.resolve("prismjs");
let components;

Prism.pluginRegistry.addEventListener("addplugin", async ({ detail: { id } }) => {
	components ??= import(new URL("components.json", base), { with: { type: "json" } });
	let { plugins } = (await components).default;

	if (plugins[id] && !plugins[id].noCSS) {
		let href = new URL(`plugins/${id}.css`, base);
		document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${href}" />`);
	}
});
