# Binary Builders Website

A modern, static website built with Hugo for Binary Builders - Building the Future of Blockchain Infrastructure.

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.110.0 or later)
- [Git](https://git-scm.com/)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/binarybuilders/binary.builders.git
cd binary.builders
```

### Install Dependencies

Installation instructions for hugo can be found [here](https://gohugo.io/installation)

## Development

### Start the Development Server

Run the Hugo development server with live reload:

```bash
hugo server -D
```

This will start a local development server at http://localhost:1313/ with hot-reloading enabled.

Options:
- `-D` or `--buildDrafts`: Include content marked as draft
- `-E` or `--buildExpired`: Include expired content
- `-F` or `--buildFuture`: Include content with publishdate in the future

### Creating New Content

```bash
hugo new content/blog/my-new-post.md
```

## Project Structure

The actual project structure is organized as follows:

```
/                           # Root directory
├── archetypes/             # Content templates
├── assets/                 # Site-wide assets (processed by Hugo Pipes)
├── content/                # Site content
│   ├── about.md            # About page
│   ├── blog/               # Blog posts
│   ├── contact.md          # Contact page
│   ├── privacy.md          # Privacy policy
│   ├── resources/          # Resource pages
│   ├── services/           # Service pages
│   ├── team.md             # Team page
│   └── terms.md            # Terms and conditions
├── data/                   # Site-wide data files
├── layouts/                # Site-wide templates
├── public/                 # Generated site (ignored by git)
├── resources/              # Cache directory (ignored by git)
├── static/                 # Static files (copied as-is to public/)
├── themes/                 # Themes
│   └── BinaryBuilders/     # Our custom theme
│       ├── archetypes/     # Theme content templates
│       ├── assets/         # Theme assets
│       │   ├── css/        # CSS files
│       │   ├── js/         # JavaScript files
│       │   │   ├── components/  # JS components
│       │   │   ├── form-handler.js
│       │   │   ├── main.js
│       │   │   ├── navigation.js
│       │   │   └── values.js
│       │   └── scss/       # SCSS files
│       │       ├── base/   # Base styles
│       │       ├── components/  # Component styles
│       │       ├── layouts/     # Layout styles
│       │       ├── utilities/   # Utility styles
│       │       ├── _variables.scss
│       │       ├── critical.scss
│       │       └── main.scss
│       ├── content/        # Theme content
│       ├── data/           # Theme data
│       ├── layouts/        # Theme templates
│       │   ├── _default/   # Default templates
│       │   ├── about/      # About page templates
│       │   ├── blog/       # Blog templates
│       │   ├── events/     # Event templates
│       │   ├── partials/   # Partial templates
│       │   ├── team/       # Team templates
│       │   └── taxonomy/   # Taxonomy templates
│       ├── static/         # Theme static files
│       ├── LICENSE         # Theme license
│       ├── README.md       # Theme readme
│       └── theme.toml      # Theme configuration
├── .github/                # GitHub configuration
│   └── workflows/          # GitHub Actions workflows
│       └── deploy.yml      # Deployment workflow
├── .gitignore              # Git ignore file
├── .hugo_build.lock        # Hugo build lock file
├── hugo.yaml               # Hugo configuration
├── hugo_stats.json         # Hugo stats file
├── STYLE_GUIDE.md          # Style guide
├── TASKS.md                # Project tasks
└── README.md               # This file
```

## Making Changes

### Theme Customization

The site uses a custom theme located in `themes/BinaryBuilders/`. Most customizations should be made there:

- **Layouts**: `themes/BinaryBuilders/layouts/` contains all the HTML templates organized by section
- **Styles**: `themes/BinaryBuilders/assets/scss/` contains all the SCSS files organized in:
  - `base/`: Base styles and resets
  - `components/`: Individual component styles
  - `layouts/`: Layout-specific styles
  - `utilities/`: Utility classes
  - `_variables.scss`: Global variables
  - `main.scss`: Main stylesheet that imports all others
  - `critical.scss`: Critical CSS for above-the-fold content
- **JavaScript**: `themes/BinaryBuilders/assets/js/` contains:
  - `main.js`: Main JavaScript file
  - `navigation.js`: Navigation functionality
  - `form-handler.js`: Form handling
  - `values.js`: Values-related functionality
  - `components/`: JavaScript components

### Content Management

Content is stored in the `content/` directory and organized by section:

- **About**: `content/about.md`
- **Blog**: `content/blog/`
- **Contact**: `content/contact.md`
- **Services**: `content/services/`
- **Resources**: `content/resources/`
- **Team**: `content/team.md`
- **Legal**: `content/privacy.md` and `content/terms.md`

## Building for Production

To build the site for production:

```bash
hugo --minify
```

This will generate the site in the `public/` directory with all assets minified.

## Deployment

### GitHub Pages Deployment

The site can be deployed to GitHub Pages using GitHub Actions.

#### Manual Deployment

1. Build the site:

```bash
hugo --minify
```

2. Deploy to GitHub Pages:

```bash
cd public
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force git@github.com:binarybuilders/binarybuilders.github.io.git main
```

#### Automated Deployment with GitHub Actions

The repository includes a GitHub Actions workflow file at `.github/workflows/deploy.yml` that needs to be updated for Hugo deployment. Here's how to set it up:

1. Update the workflow file to use Hugo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

2. Ensure your repository has GitHub Pages enabled in the repository settings.
3. Push changes to the main branch to trigger the deployment.

## Performance Optimization

The site is configured for optimal performance in `hugo.yaml`:

- Images are automatically optimized and converted to WebP format
- CSS and JavaScript are minified
- HTML is minified
- Critical CSS is inlined

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Test your changes locally with `hugo server -D`
4. Submit a pull request

## License

Copyright © Binary Builders. All rights reserved.
 
