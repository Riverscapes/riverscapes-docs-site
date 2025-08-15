# Riverscapes Documentation - docs.riverscapes.net

This project is the the new Docusaurus Riverscapes Docs site.

---

## How It Works

- **Write Content:**  
  Add your documentation as Markdown (`.md`) or MDX (`.mdx`) files in the `docs` directory. See [Contributing to Riverscapes Documentation](https://docs.riverscapes.net/get-involved/documentation/) for more information.

- **Add Images:**  
  Place any images you want to use in your docs inside the `docs\static\img` folder.

- **Custom Components:**  
  You can automatically use React TSX components provided by the [Riverscapes Docusaurus Theme](https://github.com/Riverscapes/riverscapes-docusaurus-theme) directly in your MDX files—no extra setup required.

---

## Why This Structure?

- **No unnecessary files:**  
  Only the core configuration and content folders are included.

- **Easy to maintain:**  
  Just focus on writing docs and adding images.
yar
- **Extendable:**  
  Leverage custom React components for richer documentation.

---

## Getting Started

1. **Install dependencies:**

```sh
yarn install
```

Start the local development server:

```sh
yarn start
```

Build the static site (normally you don't need to run this):

```sh
yarn build
```

🔍 View Your Site
Once the dev server is running, visit

http://localhost:3000

This will display your live documentation site with hot reloading enabled.
