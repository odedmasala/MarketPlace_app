# MarketPlace Server

Welcome to the server side of the MarketPlace B2C (Business-to-Consumer) application. The server is built using the Express.js framework and is responsible for handling the backend logic and API routes for the application.

## Project Description

The server is an integral part of the MarketPlace application, providing the necessary functionality for the client-side application to interact with the database and external APIs. It is built using the MERN stack (MongoDB, Express, React, Node.js) and follows the MVC (Model-View-Controller) architecture.

## Notable Features

- API routes: The server exposes various API routes for the client-side application to access, such as routes for user authentication, CRUD operations on the database, and integration with external APIs.

- Middleware: The server includes various middleware functions to handle tasks such as validating user input, handling errors, and protecting routes with authorization.

- Environment variables: The server uses environment variables to store sensitive information such as API keys and database URLs, allowing for secure and easy deployment to different environments.

## Database Relationships

The MarketPlace server uses a MongoDB database to store data for the application. The following collections and their relationships are used in the database:

- `Department` collection: This collection stands alone and has no relationships with other collections.
- `Order` collection: This collection has relationships with the `Store` collection, the `User` collection, and the `Product` collection.
- `Product` collection: This collection has a relationship with the `Store` collection and the `Section` collection.
- `Receipt` collection: This collection has relationships with the `Store` collection, the `User` collection, and the `Product` collection.
- `Section` collection: This collection has a relationship with the `Store` collection and the `Product` collection.
- `Store` collection: This collection has relationships with the `Department` collection, the `Product` collection, and the `Section` collection.
- `Store Manager` collection: This collection has a relationship with the `Store` collection.
- `User Manager` collection: This collection has relationships with the `PaymentBillInfo` collection and the `Store` collection.

## Getting Started

To get started with the MarketPlace server, you will need to have the following prerequisites installed on your machine:

- Node.js

You will also need to set up accounts with the following services to use their APIs:

- Google
- Facebook
- Twilio
- Cloudinary
- Stripe

Once you have these prerequisites installed and accounts set up with the necessary services, you can follow the steps below to set up the server:

1. Clone the repository to your local machine using `git clone https://github.com/odedmasala/MarketPlace_app.git`.
2. Navigate to the `server` directory in the project and create a file named `.env` to store the environment variables.
3. Set the values for the environment variables in the `.env` file.
4. Install the dependencies using `npm install`.
6. In a separate terminal, navigate to the `server` directory and start the server using `npm start`.
7. The server should now be running on `http://localhost:8001`.

## Contributing

If you are interested in contributing to the MarketPlace server, please follow these guidelines:

- Fork the repository and create a new branch for your changes.
- Make your changes and commit them to your branch.
- Open a pull request and provide a clear and concise description of your changes.

## License

MarketPlace is licensed under the [MIT License](LICENSE). This allows for the use and modification of the code for any purpose, as long as the original copyright notice is preserved.

## Acknowledgments

- MERN stack: [https://mern.io/](https://mern.io/)
- Express.js: [https://expressjs.com/](https://expressjs.com/)

## Contact

If you have any questions or suggestions for the MarketPlace server, feel free to contact the team via email at [team-email-address] or on social media at [team-social-media-handle]. We are always open to feedback and suggestions for improving the project.

