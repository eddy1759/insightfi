# InsightFi Landing Page

A modern landing page for InsightFi, an AI-powered financial insights platform that helps users understand their spending patterns, get personalized recommendations, and build better financial habits.

## Features

- Modern, responsive design built with React and TypeScript
- Waitlist form to collect email addresses from potential users
- Integration with Google Sheets to store email addresses
- Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Development

To start the development server:

```
npm run dev
```
or
```
yarn dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

```
npm run build
```
or
```
yarn build
```

This will create a `dist` directory with the production-ready application.

## Setting Up the Waitlist Form

The waitlist form is designed to collect email addresses and store them in a Google Sheet. Follow these steps to set up the integration:

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/) and create a new spreadsheet
2. Name the spreadsheet "InsightFi Waitlist"
3. Add the following headers to the first row: "Email", "Timestamp", "Source"
4. Copy the Sheet ID from the URL (the long string between /d/ and /edit)

### 2. Create a Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/) and create a new project
2. Copy and paste the code from the `google-apps-script.js` file in this repository
3. Replace `YOUR_GOOGLE_SHEET_ID` with the ID you copied in step 1.4
4. Save the project with a name like "InsightFi Waitlist Form Handler"

### 3. Deploy the Google Apps Script as a Web App

1. Click on "Deploy" > "New deployment"
2. Select "Web app" as the deployment type
3. Set the following options:
   - Description: "InsightFi Waitlist Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone, even anonymous"
4. Click "Deploy"
5. Copy the Web App URL that is generated

### 4. Update the WaitlistForm Component

1. Open the `src/components/LandingPage.tsx` file
2. Find the line with `const response = await fetch('YOUR_GOOGLE_SCRIPT_URL', {`
3. Replace `'YOUR_GOOGLE_SCRIPT_URL'` with the Web App URL you copied in step 3.5
4. Save the file

## Deployment

The application can be deployed to various platforms such as Vercel, Netlify, or GitHub Pages.

### Deploying to Netlify

1. Create a Netlify account if you don't have one
2. Click on "New site from Git"
3. Connect your repository
4. Set the build command to `npm run build` or `yarn build`
5. Set the publish directory to `dist`
6. Click on "Deploy site"

### Deploying to Vercel

1. Create a Vercel account if you don't have one
2. Click on "New Project"
3. Import your repository
4. Vercel will automatically detect the build settings
5. Click on "Deploy"

## Next Steps

After collecting enough email addresses to validate the idea, the next steps would be:

1. Analyze the interest level based on the number of sign-ups
2. Conduct user interviews with people who signed up
3. Develop an MVP (Minimum Viable Product) based on feedback
4. Launch the MVP to the waitlist users

## License

This project is licensed under the MIT License - see the LICENSE file for details.
