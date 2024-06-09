# Amazon Product Scraper

This project aims to create a simple script to scrape Amazon product listings from the first page of search results for a given keyword. It includes both backend (Node.js) and frontend (HTML, CSS, Vanilla JavaScript) components.

## Table of Contents
- [Objective](#objective)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoint](#api-endpoint)
- [Error Handling](#error-handling)

## Objective
Create a script that scrapes Amazon product listings from the first page of search results for a specified keyword and display the results on a user-friendly webpage.

## Features
- Scrapes Amazon product listings for a given keyword.
- Extracts product title, rating, number of reviews, and product image URL.
- Displays the extracted data on a simple webpage.
- Provides an input field for entering the search keyword and a button to initiate the scraping process.

## Technologies Used
- Backend: Node.js, Express, Axios, JSDOM
- Frontend: HTML, CSS, Vanilla JavaScript

## Setup Instructions

### Backend Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/amazon-product-scraper.git
   cd amazon-product-scraper
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Run the backend server:**
   ```bash
   npm run dev
   ```

### Frontend Setup
1. **Open the `index.html` file in your preferred web browser:**
   ```bash
   cd frontend
   open index.html
   ```

## Running the Application
1. Ensure the backend server is running.
2. Open the `index.html` file in your web browser.
3. Enter a keyword in the input field and click the "Search" button to initiate the scraping process.
4. The results will be displayed on the webpage.

## Project Structure
```
amazon-product-scraper/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

## API Endpoint
- **Endpoint:** `/api/scrape`
- **Method:** GET
- **Query Parameter:** `keyword` (e.g., `/api/scrape?keyword=laptop`)
- **Response:** JSON array containing product listings with the following fields:
  - `title`: Product title
  - `rating`: Product rating (stars out of five)
  - `reviews`: Number of reviews
  - `imageUrl`: Product image URL

## Error Handling
- The backend handles errors such as network issues and invalid responses from Amazon.
- The frontend displays user-friendly error messages for issues such as empty search keywords or failed API requests.
