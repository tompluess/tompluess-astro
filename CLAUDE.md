# CLAUDE.md

This file provides guidance to [Claude Code](claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Tom Plüss built with Astro. The site showcases Tom's professional services and personal projects, including:
- A Zirkuswagen "Hobbit" which can be rented for vacation stays
- Gaia Trek - wilderness trekking experiences
- PVcontracting - solar energy installation service
- Simplificator - software development and consulting

The site is primarily in German and is deployed to Vercel.

## Development Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build production site to `./dist/`               |
| `npm run preview`      | Preview build locally before deploying           |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## Architecture

### Framework & Technologies

- **Astro** (v5.3.0+) - The core framework for building the static site
- **Tailwind CSS** (v4.0.0+) - For styling
- **MDX** - For content with embedded components
- **Sharp** - For image optimization
- **Sitemap** - For SEO optimization
- **Vercel** - Deployment platform with built-in analytics

### Key Directories & Files

- `/src/layouts/` - Contains layout components including the main layout.astro
- `/src/components/` - Reusable components like navigation, SEO, gallery
- `/src/pages/` - Page content in MDX format
- `/src/assets/` - Images and other static assets
- `/public/` - Static files served directly (images, vcf file)

### Content Structure

The content is primarily organized in MDX files with frontmatter for metadata:

- Pages use JSON files (like homepage.json and hobbit.json) to define gallery content
- Gallery components display images with consistent formatting and optional captions
- The site supports standard SEO tags, Open Graph, and Twitter card metadata
- Image optimization is handled through Astro's built-in image support with Sharp
- Project images are organized by category in the assets directory (gallery, hobbit)
- Public files include downloadable content like a vCard (tompluess.vcf)

### Navigation

The site navigation is defined in `src/components/navigation.astro` with a responsive design that includes a hamburger menu for mobile devices.

### Analytics

The site uses both Vercel Analytics and Plausible.io for visitor tracking.

## Deployment

The site is deployed on Vercel with automatic deployments from the main branch. Recent additions include the Gaia Trek project, which is now featured on the homepage.

## Working with Images

When adding new images to the site:

- Place project-specific images in the appropriate subfolder in `/src/assets/`
- Use the `<Image>` component from Astro for automatic optimization
- For galleries, update the corresponding JSON file (like homepage.json or hobbit.json)
- Consider using the `image-w-caption.astro` component for images that need captions
- The preferred aspect ratio for gallery images is 3:2