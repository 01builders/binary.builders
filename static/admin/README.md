# Decap CMS for Binary Builders

This directory contains the Decap CMS configuration for the Binary Builders website.

## Setup Instructions

To use Decap CMS with GitHub Pages, follow these steps to set up GitHub OAuth:

1. **Register a new OAuth application in GitHub**:
   - Go to GitHub > Settings > Developer settings > OAuth Apps > New OAuth App
   - Set the Application name to "Binary Builders CMS"
   - Set the Homepage URL to `https://binary.builders`
   - Set the Authorization callback URL to `https://binary.builders/admin/`
   - Click "Register application"
   - Note the Client ID and generate a Client Secret

2. **Create a proxy server for GitHub OAuth**:
   Since GitHub Pages doesn't support server-side code, you'll need a small proxy server to handle OAuth authentication. You can use:
   - [Netlify Functions](https://www.netlify.com/products/functions/) (easiest)
   - [Cloudflare Workers](https://workers.cloudflare.com/)
   - A small server on a service like Heroku, Vercel, or DigitalOcean

3. **Access the CMS**:
   - The CMS will be available at `https://binary.builders/admin/`
   - Only users with write access to the repository will be able to make changes

## Alternative: Direct GitHub Authentication

If you don't want to set up a proxy server, you can use direct GitHub authentication:

1. Add your GitHub OAuth Client ID to the admin URL:
   ```
   https://binary.builders/admin/#/oauth/callback?provider=github&scope=repo&client_id=YOUR_GITHUB_CLIENT_ID
   ```

2. When users authenticate, they'll be redirected to GitHub's OAuth flow.

3. Note: This method requires users to authorize the application each time they log in.

## How It Works

1. Decap CMS provides a user-friendly interface for editing content
2. When changes are made, Decap CMS commits them directly to the GitHub repository
3. This triggers the GitHub Actions workflow, which builds the Hugo site and deploys to GitHub Pages
4. The changes will be visible on the live site once the workflow completes

## Content Structure

The CMS is configured to manage the following content types:

- **Blog Posts**: Located in `content/blog/`
- **Pages**: Individual pages like About, Contact, Privacy Policy, and Terms of Service
- **Services**: Located in `content/services/`

Each content type has specific fields defined in the `config.yml` file. 