# Whispers of Time

A full-stack social web app for sharing memories, built with React, Tailwind CSS, Recoil, Axios, Node.js, Express, and MongoDB.

## Features
- Create, read, update, and delete (CRUD) posts ("memories")
- Upload images (base64 encoded)
- Add tags to posts
- Like posts
- Responsive, modern UI with dark blue theme
- Error handling and robust API integration
- Mobile and desktop support
- Accessible and SEO-friendly

## Tech Stack
- **Frontend:** React, Tailwind CSS, Recoil, Axios, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**
   ```sh
   git clone Whispers-of-Time
   cd Whispers-of-Time
   ```

2. **Install dependencies:**
   - Frontend:
     ```sh
     cd client
     npm install
     ```
   - Backend:
     ```sh
     cd ../server
     npm install
     ```

3. **Set up environment variables:**
   - In `server/`, create a `.env` file:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. **Run the app:**
   - Start backend:
     ```sh
     npm start
     ```
   - Start frontend (in a new terminal):
     ```sh
     cd ../client
     npm run dev
     ```

## Folder Structure
```
client/
  src/
    api/           # Axios API calls
    assets/        # Images, logo, favicon
    components/    # React components (Form, Posts, Post)
    state/         # Recoil atoms
  public/          # Static files (favicon, etc.)
server/
  controllers/     # Express controllers
  models/          # Mongoose models
  Routes/          # Express routes
  index.js         # Server entry point
```

## Customization
- **Theme:** Edit Tailwind config and CSS variables in `client/src/index.css`.
- **Logo/Favicon:** Replace `client/src/assets/logo.png` and `client/public/favicon.svg`.

## Credits
- Designed and developed by Bhumesh Mahajan.

## License
This project is licensed under the MIT License.
