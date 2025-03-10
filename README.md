# Social-Network-API

## Description

This project is a **RESTful API** backend built with **Express.js** and **MongoDB** for a social network application. It allows you to create, read, update, and delete (CRUD) users, thoughts, and reactions (replies to thoughts). Users can also manage a friends list, and thoughts can have reactions from other users. The API is designed to handle complex relationships between users, thoughts, and reactions while maintaining a clean and scalable architecture.

There is a video walkthrough of the api in the [Usage](#usage) section.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

---

## Features

- **User Management**:
  - Create, read, update, and delete users.
  - Add and remove friends from a user's friends list.
- **Thought Management**:
  - Create, read, update, and delete thoughts.
  - Add and remove reactions (replies) to thoughts.
- **Reaction Management**:
  - Add and remove reactions to thoughts.
- **Data Validation**:
  - Ensures valid data is stored in the database (e.g., required fields, maximum lengths).
- **Virtuals**:
  - Automatically calculate the number of reactions for a thought and the number of friends for a user.

---

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

This will install all the required Node.js packages listed in the `package.json` file.

---

## Usage

1. Start the server by running the following command:

   ```bash
   npm run start
   ```

   This will build and run the server. By default, the server will listen on `http://localhost:3000`.

2. Use an API testing tool like **Insomnia** or **Postman** to interact with the API. You can import the provided Insomnia environment file from the root to quickly get started.

3. Refer to the [API Endpoints](#api-endpoints) section for a list of available routes and their functionality.

### Walkthrough Video

For a detailed demonstration of the API in action, check out the walkthrough video:

[![Watch the Walkthrough](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://drive.google.com/file/d/1F1msu3k_oLUubiXLjBmSwd5v5xzD5xNu/view?usp=sharing)

---

## API Endpoints

### Users

- **GET `/api/users`**: Get all users.
- **GET `/api/users/:userId`**: Get a single user by ID.
- **POST `/api/users`**: Create a new user.
- **PUT `/api/users/:userId`**: Update a user by ID.
- **DELETE `/api/users/:userId`**: Delete a user by ID.
- **POST `/api/users/:userId/friends/:friendId`**: Add a friend to a user's friends list.
- **DELETE `/api/users/:userId/friends/:friendId`**: Remove a friend from a user's friends list.

### Thoughts

- **GET `/api/thoughts`**: Get all thoughts.
- **GET `/api/thoughts/:thoughtId`**: Get a single thought by ID.
- **POST `/api/thoughts`**: Create a new thought.
- **PUT `/api/thoughts/:thoughtId`**: Update a thought by ID.
- **DELETE `/api/thoughts/:thoughtId`**: Delete a thought by ID.

### Reactions

- **POST `/api/thoughts/:thoughtId/reactions`**: Add a reaction to a thought.
- **DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`**: Remove a reaction from a thought.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JavaScript/TypeScript**: Programming languages used for development.
- **Insomnia**: Tool for testing API endpoints.

---

## License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](LICENSE) file.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch and submit a pull request.

For major changes, please open an issue first to discuss what you'd like to change.

---

## Questions

If you have any questions, feel free to reach out:

- **Email**: [dllorens28@gmail.com](mailto:dllorens28@gmail.com)
- **GitHub**: [dlastname](https://github.com/dlastname)

---
