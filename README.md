<div align="center">
  <img src="src/Logo.png" alt="FreeSoftware Alternatives" width="400">
</div>

<h1 align="center">FreeSoftware Alternatives <sub><sup>جایگزین‌های آزاد</sup></sub></h1>

<p align="center">A wiki of free and open-source software alternatives to proprietary applications.</p>

<p align="center"><a href="https://fossalts.smartnima.com"><strong>📖 Visit the site →</strong></a></p>

## Sections

- 🤖 **Android** — Free apps, games, and tools for Android (sourced from [F-Droid](https://f-droid.org), [IzzyOnDroid](https://gitlab.com/sunilpaulmathew/izzyondroid), etc.)
- 🌐 **Front-ends** — Free front-ends and alternatives for YouTube, Twitter, Reddit, Google Play, WhatsApp, and more

## What is Free Software?

> "Free software" is a matter of liberty, not price. Free software gives users the four essential freedoms:
>
> **Freedom 0** — Run the program for any purpose  
> **Freedom 1** — Study and change the source code  
> **Freedom 2** — Redistribute copies to help others  
> **Freedom 3** — Improve the program and release changes publicly

Read more at [gnu.org](https://www.gnu.org/philosophy/free-sw.fa.html).

## Tech Stack

- **[mdBook](https://rust-lang.github.io/mdBook/)** — Generates the static site
- Custom CSS (RTL layout, [Vazirmatn](https://github.com/rastikerdar/vazirmatn) font, section cards)
- Custom JS (lazy-load app icons via [vanilla-lazyload](https://cdn.jsdelivr.net/npm/vanilla-lazyload@19.1.3/), external links open in new tab)
- Hosted on **GitHub Pages** with custom domain `fossalts.smartnima.com`

## Local Development

```bash
# Install mdBook (if not installed)
cargo install mdbook

# Serve locally with live reload
mdbook serve src

# Or just build
mdbook build src
```

Built output goes to `book/`.

## Contributing

1. Edit the Markdown files under `src/`
2. Update `src/SUMMARY.md` if adding a new page
3. Submit a pull request

## License

This project is open source. See the repository for license details.

