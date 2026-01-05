---
title: Other Shared Assets
description: Assets and rules for using the Riverscapes Visual Identity
sidebar_position: 3
---

# Sharing Images via the `static` Folder

The Riverscapes Docs Website (this website) allows you to share images and other assets by placing them in the `static` folder of this repository. This works much like a simple CDN (Content Delivery Network), making it easy to reference and share images across documentation, websites, and external resources.


## How It Works

Any file placed in the `static` directory (e.g., `static/images/avatars/jane.png`) of the riverscapes docs site repo (**[https://github.com/Riverscapes/riverscapes-docs-site](https://github.com/Riverscapes/riverscapes-docs-site)**) is automatically served at a public URL when the site is built and deployed. This means you can use these images in markdown, HTML, or anywhere a direct link is needed.

### Example: Adding and Using an Image

Suppose you add an image to the [riverscapes docs site repo](https://github.com/Riverscapes/riverscapes-docs-site) at:

```
static/images/people/Joe_Cartoon_KellyStanford_Round200.png
```

The image will be available at:

```
https://docs.riverscapes.net/images/people/Joe_Cartoon_KellyStanford_Round200.png
```

You can reference it in markdown like this from anywhere else on the internet including our other docusaurus sites:

```markdown
![Joe's Avatar](https://docs.riverscapes.net/img/people/JoeWheaton_Circle.png)
```

<img src="/img/people/JoeWheaton_Circle.png" alt="Joe's Avatar" />


## Notes and Best Practices

- **Stability:** Once an image is added and shared, changing or deleting it can break links for others who depend on it. If you need to update an image, consider versioning (e.g., `jane-v2.png`) or communicating changes to users.
- **Casual Sharing:** The `static` folder is intended for quick, informal sharing of images (e.g., avatars, screenshots, diagrams) that don't require strict version control or approval.

## Why do this? Can't I just host my own images in whatever site I want?

Yes, you can! The reason we use this method is that it's simple and easy to use. You can just add an image to the `static` folder and it will be available at a public URL when the site is built and deployed. This means you can use these images in markdown, HTML, or anywhere a direct link is needed.

## How This Differs from the Visual Identity Repo & CDN

- **Docs Site `static` Folder (this method):**
	- Used for casual, shared images (avatars, quick graphics, etc.).
	- Changes are immediate and less controlled.
	- Best for assets that don't need strict governance.
	- No CORS restrictions when used in web applications.
- **Visual Identity Repo/CDN:**
	- Used for official, source-controlled brand assets (logos, icons, templates).
	- Changes are reviewed, versioned, and tightly managed.
	- Intended for assets that require consistency and traceability.
	- Subject to CORS restrictions when used in web applications. (This means images served from the CDN may not display correctly in some web apps unless CORS is properly configured and the origin is allowed.)

## Asset Browser

Below is a list of all images available in the `static` folder of this repository. You can use this to quickly find and copy the URL for any asset.

import AssetBrowser from '@site/src/components/AssetBrowser';

<AssetBrowser />

