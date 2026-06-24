# Chatz Real-Time Chat App

Chatz is a full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. It includes user authentication, live messaging, online presence, profile updates, and image sharing.

## Screenshots


## Features

- User signup, login, and logout
- JWT-based authentication with httpOnly cookies
- Real-time one-to-one messaging with Socket.IO
- Online users indicator
- Profile picture upload with Cloudinary
- User profile update
- Dark/light theme support

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


