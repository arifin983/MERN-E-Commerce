# MERN Stack eCommerce Project

## Overview

This project is a full-stack eCommerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It leverages modern frameworks and libraries to provide a robust, scalable, and user-friendly platform for online shopping. Custom components such as a carousel and MUI (Material-UI) components are used to enhance the UI. Stripe is integrated for payment processing. Images are managed and stored using Cloudinary.

## Features

- User Authentication and Authorization
- Product Management (CRUD operations)
- Shopping Cart functionality
- Order Management
- Stripe Payment Integration
- Responsive Design
- Custom Carousel Component
- MUI Components for UI
- Admin Dashboard
- Search and Filtering
- User Reviews and Ratings
- Cloudinary Integration for Image Storage

## Tech Stack

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Redux**: State management for React applications.
- **React-Router-dom**: For routing within the application.
- **Axios**: For making HTTP requests.
- **Bootstrap**: For styling and responsive design.
- **Material-UI (MUI)**: For modern UI components.
- **Custom Carousel Component**: Developed for showcasing products.

### Backend

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product, user, and order data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT**: For secure user authentication.
- **Stripe**: For payment processing.
- **Cloudinary**: For image storage and management.

### Development Tools

- **ESLint**: For identifying and fixing code issues.
- **Prettier**: For code formatting.
- **Nodemon**: For automatically restarting the server during development.
- **Postman**: For API testing.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo-name
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

### Running the Application

1. Start the backend server:

    ```bash
    npm run server
    ```

2. Start the frontend:

    ```bash
    npm run client
    ```

3. Visit `http://localhost:3000` in your browser to see the application.

## Folder Structure

|-- backend
| |-- config
| |-- controllers
| |-- models
| |-- routes
| |-- utils
| |-- server.js
|
|-- frontend
| |-- public
| |-- src
| |-- components
| |-- Carousel
| |-- MUI
| |-- constants
| |-- reducers
| |-- screens
| |-- store
| |-- App.js
| |-- index.js
|
|-- .env
|-- .gitignore
|-- package.json
|-- README.md


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any issues or questions, please contact arifuddin.danin@gmail.com(mailto:arifuddin.danin@gmail.com).
