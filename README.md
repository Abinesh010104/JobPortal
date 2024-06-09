
# Job Portal

![Job Portal Logo](jobPortalClient/public/JobLogo.png)

## Overview

Job Portal is a web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to search for jobs, apply for them, and manage job postings.

## Features

- User Authentication (Sign Up, Login, Logout)
- User Roles (Admin, Job Seeker, Employer)
- Job Listings and Applications
- Dashboard for Job Seekers and Employers
- Admin Panel for Managing Users and Job Posts

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, Cookies
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    \`\`\`bash
    git clone https://github.com/your-username/job-portal.git
    cd job-portal
    \`\`\`

2. Install dependencies for both client and server:
    \`\`\`bash
    cd jobPortalClient
    npm install
    cd ../jobPortalServer
    npm install
    \`\`\`

### Configuration

Create a \`.env\` file in the \`jobPortalServer\` directory with the following environment variables:

\`\`\`env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
\`\`\`

### Running the Application

1. Start the backend server:
    \`\`\`bash
    cd jobPortalServer
    npm start
    \`\`\`

2. Start the frontend development server:
    \`\`\`bash
    cd jobPortalClient
    npm run dev
    \`\`\`

3. Open your browser and go to \`http://localhost:3000\`.

## Project Structure

\`\`\`
JobPortal/
├── jobPortalClient/          # Frontend (React)
│   ├── public/               # Public assets
│   ├── src/                  # Source files
│   │   ├── assets/           # Media and CSS
│   │   ├── Layout/           # Layout components
│   │   ├── Router/           # Routes
│   │   ├── App.css           # Main CSS file
│   │   ├── main.jsx          # Main entry point
│   │   └── ...               # Other components and files
│   ├── package.json          # Frontend dependencies
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── ...                   # Other configuration files
│
├── jobPortalServer/          # Backend (Express)
│   ├── Controller/           # API controllers
│   ├── Middleware/           # Middleware functions
│   ├── Model/                # Mongoose models
│   ├── Router/               # API routes
│   ├── Utils/                # Utility functions
│   ├── Validation/           # Validation rules
│   ├── package.json          # Backend dependencies
│   └── ...                   # Other configuration files
│
├── .gitignore                # Git ignore file
└── README.md                 # Project README file
\`\`\`

## Key Files

- **Frontend**:
  - \`main.jsx\`: Entry point for the React application.
  - \`App.css\`: Main stylesheet.
  - \`Layout/\`: Contains layout components.
  - \`Router/Routes.jsx\`: Defines application routes.

- **Backend**:
  - \`Controller/\`: Contains controllers for handling requests.
  - \`Middleware/\`: Authentication and authorization middleware.
  - \`Model/\`: Mongoose schemas and models.
  - \`Router/\`: API endpoints.
  - \`Utils/\`: Utility functions, including database connection and JWT generation.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, please contact:
- Email: your-email@example.com
- GitHub: [your-username](https://github.com/your-username)
