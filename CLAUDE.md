# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Tom Plüss built with Astro. The site showcases Tom's professional services and personal projects, including a Zirkuswagen "Hobbit" which can be rented for vacation stays. The site is deployed to Vercel.

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

- **Astro** - The core framework for building the static site
- **Tailwind CSS** - For styling
- **MDX** - For content with embedded components
- **Vercel** - Deployment platform

### Key Directories & Files

- `/src/layouts/` - Contains layout components including the main layout.astro
- `/src/components/` - Reusable components like navigation, SEO, gallery
- `/src/pages/` - Page content in MDX format
- `/src/assets/` - Images and other static assets
- `/public/` - Static files served directly (images, vcf file)

### Content Structure

The content is primarily organized in MDX files with frontmatter for metadata:

- Pages use JSON files (like homepage.json and hobbit.json) to define gallery content
- The site supports standard SEO tags, Open Graph, and Twitter card metadata
- Image optimization is handled through Astro's built-in image support

### Navigation

The site navigation is defined in `src/components/navigation.astro` with a responsive design that includes a hamburger menu for mobile devices.

### Analytics

The site uses both Vercel Analytics and Plausible.io for visitor tracking.

## Deployment

The site is deployed on Vercel. The latest branch is `update-add-gaiatrek` which adds the Gaia Trek project to the site.