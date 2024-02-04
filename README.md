# Promptopia - Prompt Sharing Web Application

## Overview

Welcome to Promptopia, a creative writing platform designed for sharing and exploring various writing prompts. This web application comes equipped with user authentication and CRUD (Create, Read, Edit, Delete) features, providing a secure and interactive environment for writers.

## Technologies Used

- **bcrypt**: Library for secure password hashing.
- **mongodb**: NoSQL database for efficient data management.
- **mongoose**: MongoDB object modeling for Node.js.
- **next**: React-based framework for server-rendered applications.
- **next-auth**: Authentication library for Next.js applications.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods for React.

### Development Dependencies

- **autoprefixer**: PostCSS plugin for automatic vendor prefixing.
- **postcss**: Tool for transforming styles with JS plugins.
- **tailwindcss**: Highly customizable CSS framework.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Promptopia.git
    ```

2. **Install dependencies:**

    ```bash
    cd Promptopia
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with the following:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_URL=http://localhost:3000
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

    Access the application at `http://localhost:3000`.

## Features

- **User Authentication:** Secure registration and login with bcrypt password hashing.
- **Prompt CRUD Operations:** Create, Read, Update, and Delete prompts for an interactive platform.
- **Next.js Framework:** Efficient server-rendered applications.
- **Tailwind CSS:** Customizable framework for a modern user interface.
