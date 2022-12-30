# MarketPlace (B2C App)

Welcome to MarketPlace, a B2C (Business-to-Consumer) application built using the MERN (MongoDB, Express, React, Node.js) stack and authentication libraries such as formik and redux toolkit.

## Project Description

This project was completed as a group effort to build a functioning B2C application with authentication and authorization features. The goal was to gain experience in working as a team to develop a complex application and learn how to implement these features in a web application.

The user interface of the application was designed using tailwindcss, a utility-first CSS framework. This allowed for a clean and efficient design process, resulting in a professional and user-friendly interface.

## Notable Features

- Authentication: Users are able to create accounts and log in to the application using formik and redux toolkit for form validation and state management. The application also supports third-party authentication using Google and Facebook.

- Authorization: The application implements various levels of authorization to ensure that only certain users have access to certain features. This helps to maintain security and prevent unauthorized access.

- Team development: The application was developed by a team, allowing for the sharing of knowledge and skills and the creation of a cohesive product.

## Environment Variables

The following environment variables are used in the MarketPlace project:

- `GOOGLE_CLIENT_ID`: The client ID for Google authentication.
- `GOOGLE_CLIENT_SECRET`: The client secret for Google authentication.
- `FACEBOOK_APP_ID`: The app ID for Facebook authentication.
- `FACEBOOK_APP_SECRET`: The app secret for Facebook authentication.
- `SID`: The SID for Twilio integration.
- `AUTH_TOKEN`: The authentication token for Twilio integration.
- `CLOUDINARY_CLOUD_NAME`: The Cloudinary cloud name for image hosting.
- `CLOUDINARY_API_KEY`: The Cloudinary API key for image hosting.
- `CLOUDINARY_API_SECRET`: The Cloudinary API secret for image hosting.
- `STRIPE_KEY`: The Stripe API key for payment processing.
- `PORT`: The port on which the server should run.
- `MONGO_URL`: The URL for the MongoDB database.
- `CLIENT_URL`: The URL for the client-side application.

## Possible Improvements

There are always opportunities for improvement in any project. Some possible areas for improvement in MarketPlace could include:

- Adding more features: There are many additional features that could be added to the
application, such as the ability to leave reviews, make purchases, or send messages.

- Improving performance: The application could be optimized for faster loading times and better overall performance. This could be achieved through techniques such as code optimization and the use of performance-enhancing tools.

- Adding tests: Adding automated tests to the application would allow for the detection of any issues or regressions as the codebase grows and evolves.

- Improving the design: The design of the application could be further refined and improved to provide an even better user experience. This could involve iterating on the current design or exploring new design frameworks.

## Getting Started

To get started with MarketPlace, you will need to have the following prerequisites installed on your machine:

- Node.js

You will also need to set up accounts with the following services to use their APIs:

- Google
- Facebook
- Twilio
- Cloudinary
- Stripe

Once you have these prerequisites installed and accounts set up with the necessary services, you can follow the steps below to set up the application:

1. Clone the repository to your local machine using `git clone https://github.com/odedmasala/MarketPlace_app.git`.
2. Navigate to the root directory of the project get inside to the server folder and create a file named `.env` to store the environment variables.
3. Set the values for the environment variables in the `.env` file.
2. Navigate to the root directory of the project and install the dependencies for both the server and client using `npm install` in the `server` and `client` folders respectively.
4. Open a new terminal and split it, in each split terminal run one of the server and client files and run both files and start the application using `npm start`.
5. The application should now be running on `http://localhost:3000` and the server in `http://localhost:8001` or port you can Choose..

## Contributing

If you are interested in contributing to the MarketPlace project, please follow these guidelines:

- Fork the repository
and create a new branch for your changes.
- Make your changes and commit them to your branch.
- Open a pull request and provide a clear and concise description of your changes.
