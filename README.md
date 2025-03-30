# SocialMERN-BE

## 📄 About the Project
SocialMERN-BE is the backend for a full-stack social media application built with the MERN (MongoDB, Express, React, Node.js) stack. It provides essential APIs for user authentication, post management, likes, comments, and other social media functionalities.

## 🚀 Features
- 🔑 User authentication (JWT-based login & registration)
- 📝 Post creation, deletion, and retrieval
- ❤️ Like and comment system
- 👥 Follow/unfollow users
- 🔒 Secure API with authentication middleware
- 📡 Real-time updates with WebSockets (if implemented)

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Token), bcrypt
- **Storage**: Cloudinary

## 💻 Installation
To set up and run the backend locally, follow these steps:

1. **Clone the repository**
   ```sh
   git clone https://github.com/TusharLOL/SocialMERN-BE.git
   cd SocialMERN-BE
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_API_KEY=your_cloudinary_key (if applicable)
   CLOUDINARY_SECRET=your_cloudinary_secret (if applicable)
   ```

4. **Start the server**
   ```sh
   npm start
   ```

5. **API will be running on**
   ```
   http://localhost:5000
   ```

## 🎯 API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a token

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user details

### Posts
- `POST /api/posts` - Create a new post
- `GET /api/posts` - Get all posts
- `DELETE /api/posts/:id` - Delete a post

### Interactions
- `POST /api/posts/:id/like` - Like a post
- `POST /api/posts/:id/comment` - Comment on a post

## 🤝 Contributing
Contributions are welcome! If you’d like to contribute:
- Fork the repository
- Create a new branch (`feature-branch`)
- Commit your changes
- Push the branch and create a Pull Request

## 📜 License
This project is licensed under the MIT License.

## 📬 Contact
For any questions or suggestions, feel free to reach out!
- **GitHub**: [TusharLOL](https://github.com/TusharLOL)
- **Email**: tushdontulwar@gmail.com

Happy Coding! 🚀

