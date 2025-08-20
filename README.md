# Modern Personal Portfolio

This is a modern, single-page portfolio website built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/). It is designed to be fast, responsive, and easy to deploy.

The project structure is based on Astro's best practices, with reusable components located in `src/components` and a main layout in `src/layouts`.

## Project Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## How to Deploy

This Astro project builds to a static site, making it perfect for deployment on various free platforms.

After running `npm run build`, the output will be in the `dist/` directory. You can deploy this directory to any static hosting provider.

### Vercel / Netlify

For platforms like Vercel or Netlify, you can connect your GitHub repository directly. They will automatically detect that it's an Astro project and configure the build settings correctly:
- **Build Command:** `npm run build` or `astro build`
- **Publish Directory:** `dist`

### GitHub Pages

1.  **Configure `astro.config.mjs`:** Set the `site` option in your `astro.config.mjs` to `https://<YOUR_USERNAME>.github.io` and the `base` option to `/<YOUR_REPO_NAME>`.
2.  **Push to GitHub:** Make sure your code is pushed to your GitHub repository.
3.  **Deploy:** Use a GitHub Actions workflow to build and deploy your site automatically. You can find official Astro guides for this.

---

This project was built with assistance from a skilled AI software engineer.
