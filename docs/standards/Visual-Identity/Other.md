---
title: Other Shared Assets
description: Assets and rules for using the Riverscapes Visual Identity
sidebar_position: 3
---

# Sharing Images via the `static` Folder

The Riverscapes Docs Website allows you to share images and other assets by placing them in the `static` folder of this repository. This works much like a simple CDN (Content Delivery Network), making it easy to reference and share images across documentation, websites, and external resources.

## How It Works

Any file placed in the `static` directory (e.g., `static/images/avatars/jane.png`) is automatically served at a public URL when the site is built and deployed. This means you can use these images in markdown, HTML, or anywhere a direct link is needed.

### Example: Adding and Using an Image

Suppose you add an image at:

```
static/images/people/Joe_Cartoon_KellyStanford_Round200.png
```

The image will be available at:

```
https://docs.riverscapes.net/images/people/Joe_Cartoon_KellyStanford_Round200.png
```

You can reference it in markdown like this:

```markdown
![Joe's Avatar](https://docs.riverscapes.net/images/people/Joe_Cartoon_KellyStanford_Round200.png)
```

![Jane's Avatar](/images/people/Joe_Cartoon_KellyStanford_Round200.png)


## Notes and Best Practices

- **Stability:** Once an image is added and shared, changing or deleting it can break links for others who depend on it. If you need to update an image, consider versioning (e.g., `jane-v2.png`) or communicating changes to users.
- **Casual Sharing:** The `static` folder is intended for quick, informal sharing of images (e.g., avatars, screenshots, diagrams) that don't require strict version control or approval.

## How This Differs from the Visual Identity Repo & CDN

- **Docs Site `static` Folder (this method):**
	- Used for casual, shared images (avatars, quick graphics, etc.).
	- Changes are immediate and less controlled.
	- Best for assets that don't need strict governance.
- **Visual Identity Repo/CDN:**
	- Used for official, source-controlled brand assets (logos, icons, templates).
	- Changes are reviewed, versioned, and tightly managed.
	- Intended for assets that require consistency and traceability.

