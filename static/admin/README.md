# Decap CMS for Binary Builders

This directory contains the Decap CMS configuration for the Binary Builders website.

## Setup Instructions

To use Decap CMS with GitHub Pages, you need to set up GitHub OAuth:

1. **Register a new OAuth application in GitHub**:
   - Go to GitHub > Settings > Developer settings > OAuth Apps > New OAuth App
   - Set the Application name to "Binary Builders CMS"
   - Set the Homepage URL to `https://binary.builders`
   - Set the Authorization callback URL to `https://binary.builders/admin/`
   - Click "Register application"
   - Note the Client ID and generate a Client Secret

2. **Access the CMS**:
   - The CMS will be available at `https://binary.builders/admin/`
   - You'll need to append your Client ID as a parameter: `https://binary.builders/admin/#/oauth/callback?provider=github&scope=repo&client_id=YOUR_GITHUB_CLIENT_ID`
   - Replace `YOUR_GITHUB_CLIENT_ID` with the actual Client ID from step 1

3. **Authentication**:
   - When accessing the CMS, you'll be prompted to authenticate with GitHub
   - Only users with write access to the repository will be able to make changes

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