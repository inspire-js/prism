export const hasCSS = false;

function load () {
	if (document.querySelector(`[class*="lang-"], [class*="language-"]`)) {
		document.removeEventListener("inspire-domchanged", load);
		return import("./prism.js");
	}
}

// The first code block may appear later, e.g. rendered from Markdown
document.addEventListener("inspire-domchanged", load);
await load();
