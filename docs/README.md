# Vite App Deployment Instructions

This document provides instructions for building the Vite app and deploying it to GitHub Pages from the `/docs` directory.

## Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

## Building the Vite App

1. **Install dependencies**: Open a terminal and navigate to the root of your project. Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

2. **Build the application**: Once the dependencies are installed, build the application with the following command:

   ```bash
   npm run build
   ```

   This will create a `dist` directory containing your production-ready application.

## Deploying to GitHub Pages

To deploy the application to GitHub Pages, follow these steps:

1. **Copy files to the `/docs` directory**: After building your application, copy the contents of the `dist` directory to the `docs` directory:

   ```bash
   cp -r dist/* docs/
   ```

2. **Commit and push changes**: Add the changes to your Git repository, commit, and push to the `main` branch:

   ```bash
   git add docs
   git commit -m "Update docs for GitHub Pages deployment"
   git push origin main
   ```

3. **Configure GitHub Pages**: Go to your repository on GitHub, navigate to the "Settings" tab, scroll down to the "Pages" section, and ensure that the source is set to the `main` branch and the `/docs` folder.

4. **Access your deployed app**: After a few minutes, your app should be available at `https://<username>.github.io/<repository>/`, where `<username>` is your GitHub username and `<repository>` is the name of your repository.

## Conclusion

You have successfully built and deployed your Vite app to GitHub Pages. For further customization and development, refer to the Vite and Tailwind documentation.