# 🏡 Brick Base - Real Estate App (MERN Stack)

This is a full-stack **Real Estate** web application built using the **MERN stack** (MongoDB, Express, React, Node.js). The platform allows users to browse, search, and inquire about properties, and directly chat with property owners. 

## 🚀 Features

- **Browse Properties**: Users can explore property listings with filters like location, price, and type.
- **Authentication**: Secure user login and registration using JWT (JSON Web Tokens).
- **Property Management**: Owners can list, update, and remove their properties.
- **Chat Interface**: Real-time chat between users and property owners powered by Socket.io.
- **Interactive Map**: Integrated maps using Leaflet to display property locations visually.
- **Favorites**: Users can save properties to a favorites list.
- **Responsive Design**: The app is fully responsive across different device sizes (mobile, tablet, desktop).

## 🛠️ Technologies Used

### Frontend:
- **React.js**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **Redux**: For state management across components.
- **Axios**: For making HTTP requests from the frontend to the backend API.
- **React-Leaflet**: For map integration, showing property locations on an interactive map.
  
### Backend:
- **Node.js**: JavaScript runtime environment for the backend.
- **Express.js**: Framework for building APIs and handling backend logic.
- **MongoDB**: NoSQL database for storing user data, property listings, and chat messages.
- **Mongoose**: ORM for MongoDB for easier data modeling and querying.
- **Socket.io**: Real-time, bidirectional communication for chat functionality.
  
### Other Tools:
- **JWT**: For secure authentication and user sessions.
- **Bcrypt.js**: For password hashing.
- **Cloudinary**: For image hosting (property images).
  
## 📄 Project Structure

### Frontend:
- **Components**: Reusable React components for UI (e.g., PropertyCard, Map, ChatWindow).
- **Pages**: Main pages like `Home`, `PropertyDetails`, `Favorites`, `OwnerDashboard`.
- **Redux Store**: Manages global state (e.g., user authentication, properties, chat).

### Backend:
- **Routes**: API endpoints for user registration, property management, chat.
- **Controllers**: Handle the business logic for users, properties, and messages.
- **Models**: MongoDB schemas and models for users, properties, and chat.
- **Socket.io Events**: Handles real-time chat message delivery.

## 💬 Real-Time Chat Interface

The **chat interface** allows users to directly contact property owners in real-time. Built with **Socket.io**, it provides instant messaging between a prospective buyer and the property owner.

- **Private Chats**: Each chat is specific to a user-property-owner trio.
- **Real-time Messaging**: Users and owners can exchange messages in real-time.
- **Persistent Chat History**: Chat messages are stored in MongoDB for future reference.
- **UI**: The chat interface is simple and intuitive, with real-time updates.

### How It Works:
1. When a user views a property, they can initiate a chat with the owner.
2. The user and the owner can communicate in real-time via the chat window.
3. Messages are stored in MongoDB and fetched on page load so users can resume conversations.

## 📦 Installation and Setup

### Prerequisites:
- **Node.js** installed on your system
- **MongoDB** running locally or via a cloud service (e.g., MongoDB Atlas)

### Backend Setup:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/real-estate-app.git
    cd real-estate-app/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory with the following variables:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4. Run the backend server:
    ```bash
    npm run dev
    ```

### Frontend Setup:

1. Go to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the frontend directory with the following variable:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Run the frontend app:
    ```bash
    npm start
    ```

### Running the App:

- The backend will run on `http://localhost:5000/` and the frontend on `http://localhost:3000/`.
- Make sure MongoDB is running, and the backend server is connected to it.

## 🤝 Contribution

Feel free to contribute to this project! Fork the repository, make your changes, and submit a pull request.

## 📧 Contact

For any questions or feedback, feel free to reach out:
- **Email**: tallapragadaphaneendranikhil@gmail.com
- **GitHub**: [Phaneendra Nikhil](https://github.com/phaneendra-nikhil)
