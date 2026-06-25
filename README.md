# Chatz Real-Time Chat App

Chatz is a full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. It includes user authentication, live messaging, online presence, profile updates, and image sharing.

## Deployment 
Frontend : - https://chatz-real-time-chat-app-iuse.vercel.app
https://f8743cfe-2a6e-4b78-b918-b4ebb55f1378-00-20lnxagb4y053.pike.replit.dev/
## Screenshots
<img width="1908" height="1042" alt="image" src="https://github.com/user-attachments/assets/1dadac4a-06ae-4a0e-9418-f0d922e83281" />
<img width="1905" height="1055" alt="image" src="https://github.com/user-attachments/assets/d00c9ecd-2728-4560-9c68-e1cf812a80b1" />
<img width="1907" height="1031" alt="image" src="https://github.com/user-attachments/assets/de2e2f32-01cb-47f1-afe9-69aaea59137a" />
<img width="1906" height="1046" alt="image" src="https://github.com/user-attachments/assets/3255436a-a7bd-4e24-a1c1-3451c0df3d5a" />
<img width="1888" height="1035" alt="image" src="https://github.com/user-attachments/assets/e08a6472-dac9-4077-870f-7d4071ee4549" />
<img width="1907" height="975" alt="image" src="https://github.com/user-attachments/assets/c6237361-8a56-4573-a753-cf19225771d1" />
<img width="513" height="951" alt="image" src="https://github.com/user-attachments/assets/5fb20b09-e23c-4fcb-8e5e-7d02b971a6ea" />



## Features

- User signup, login, and logout
- JWT-based authentication with httpOnly cookies
- Real-time one-to-one messaging with Socket.IO
- Online users indicator
- Profile picture upload with Cloudinary
- User profile update
- Different themes support

## Tech Stack

- **Frontend:** React, Vite, Zustand, React Router, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO
- **Auth & Media:** JWT, bcryptjs, Cloudinary

## Project Structure

```bash
chat-app/
├── backend/
└── frontend/
```

## Prerequisites

- Node.js 18+
- MongoDB database
- Cloudinary account

## Environment Variables

Create a `.env` file inside `backend/`:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Dushani-Ekanayake/Chatz-Real-Time-Chat-App.git
cd chat-app
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

## Running the App

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
cd frontend
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend runs on `http://localhost:5001` by default.

## Build for Production

```bash
cd frontend
npm run build
```

## API Overview

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `PUT /api/auth/update-profile`
- `GET /api/auth/check`
- `GET /api/messages/users`
- `GET /api/messages/:id`
- `POST /api/messages/send/:id`


