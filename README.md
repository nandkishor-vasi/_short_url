Short URL Project
This project is a simple URL shortener application built using Node.js and MongoDB. The application allows users to input long URLs and receive a shortened version that redirects to the original link.

Features
Shorten URLs: Users can submit long URLs to generate a shorter version.
Redirection: When the short URL is accessed, it redirects to the original long URL.
Database Storage: All shortened URLs are stored in a MongoDB database for persistence.
User Interface: A simple front-end using HTML/CSS for user interaction.
RESTful API: Provides an API to shorten URLs and retrieve original URLs.

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Frontend: HTML, CSS
Tools: Postman for API testing
Installation

Clone the repository:
Copy code
git clone https://github.com/yourusername/short-url-project.git
Navigate to the project directory:
Copy code
cd short-url-project

Install dependencies:
Copy code
npm install

Start the application:
Copy code
npm start
Open your browser and visit http://localhost:3000 to access the app.

Usage
Enter a long URL in the input field and click "Shorten".
Copy the generated short URL and use it to access the original link.
