📚 Book Store Web App

An interactive and responsive Book Store Web Application built using React.js, Tailwind CSS, and GSAP animations. This project allows users to browse, filter, and explore books by category, price, and rating — all wrapped in a modern, animated interface.

🚀 Features

🧭 Dynamic Book Listing – Books rendered dynamically using React components

🔍 Filter System – Filter by category, language, rating, and price range

🎨 GSAP Animations – Smooth transitions and motion effects for a premium UI feel

💰 Interactive Cart Section – Add or remove books easily with real-time UI updates

🌈 Tailwind Styling – Fully responsive layout designed using Tailwind CSS

⚡ Slug-based Routing – Dynamic routing for individual book details using React Router

🛠️ Tech Stack
Category	Technologies
Frontend	React.js, JavaScript (ES6+), HTML5, Tailwind CSS
Animations	GSAP
Routing	React Router DOM
State Handling	useState, useParams
Version Control	Git & GitHub
📸 Screenshots
Home Page	Filter Section	Book Detail
(Add screenshot links or images here)	(Add screenshot links or images here)	(Add screenshot links or images here)
🧩 Folder Structure
book-store/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   └── Card2.jsx
│   │   │
│   │   ├── book/
│   │   │   ├── Cards.jsx
│   │   │   ├── BookSearch.jsx
│   │   │   └── BookItem.jsx
│   │   │
│   │   ├── filter/
│   │   │   ├── Filter.jsx
│   │   │   ├── FilterSection.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── AuthorFilter.jsx
│   │   │   ├── Price.jsx
│   │   │   └── Rating.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── data/
│   │   └── books.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BooksDetail.jsx
│   │   ├── Cart.jsx
│   │   └── Favourite.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── eslint.config.js


🧠 What I Learned

Implementing slug-based routing in React for individual item pages

Building custom filters and sliders using React state

Applying GSAP for smooth and modern animations

Creating responsive layouts with Tailwind CSS utility classes

📦 Installation

To run this project locally:

# Clone the repository
https://github.com/mukunjsingh/Bookstore-using-react.js

# Navigate to the folder
cd book-store

# Install dependencies
npm install

# Start the development server
npm start

👨‍💻 Author

Mukunj Singh


