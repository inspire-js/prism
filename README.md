# Prism

Syntax highlighting via [Prism](https://prismjs.com), loaded on demand — only Prism core and the languages your deck actually uses are fetched.

> [!NOTE]
> This plugin uses Prism v2, which is still in alpha (`prismjs@2.0.0-alpha.1`). Its API may change before the stable release.

## Usage

Mark up code blocks with a language class, as usual for Prism:

```html
<pre><code class="language-css">a { color: red }</code></pre>
```

Prism scans for `lang-*` / `language-*` classes on code elements or any of their ancestors (e.g. a whole slide), then loads those languages (resolving dependencies and aliases) and highlights the code.

- `data-prism-plugins="name, …"` on the first element that has it: load [Prism plugins](https://prismjs.com/#plugins) (e.g. `normalize-whitespace`).
- `.prism-ignore` on (or around) an element opts it out of highlighting.
- Code added after load is highlighted when its container fires `inspire-domchanged` (e.g. via `Inspire.domchanged(element)`).

## Autoload

Autoloads when any element has a `lang-*` or `language-*` class.

## Demo

`index.html` is a small demo deck. Run `npm install` to generate its import map, then serve this folder with any static server, e.g. `npx http-server`. Opening the file directly won’t work, because browsers block ES modules on `file://` URLs.
