# Portfolio Project

This project is a personal portfolio website built with React.

## Setup

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Set up EmailJS for the contact form:
   - Sign up for an account at [EmailJS](https://www.emailjs.com/)
   - Create a new service and email template
   - Copy your EmailJS User ID, Service ID, and Template ID
5. Create a `.env` file in the project root and add the following variables:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_USER_ID=your_user_id
   ```
6. Start the development server:
   ```
   npm start
   ```

## Project Structure

- `src/components/`: Contains all React components
- `src/styles/`: Contains CSS files for styling
- `src/images/`: Stores image assets
- `src/data/`: Contains static data used in the application

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Deployment

This project can be easily deployed to platforms like Netlify, Vercel, or GitHub Pages. Make sure to set up the EmailJS environment variables in your deployment platform's settings.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
