# Project Title

Your Project Name

## Description

Your project is a platform that allows users to create, read, update, and delete blog posts. It provides functionalities for users to browse through blogs, filter them, add them to their wishlist, and interact with other users through comments.

Live Link: [YourProjectName.com](http://www.yourprojectname.com)

## Features

### Home Page:
- Header (simple navbar)
- Banner (hero section)
- Recent blog posts section (with title, image, short description, category, details button, wishlist button)
- Newsletter section (email capture with success message)
- Two additional, unique sections relevant to your website
- Conditional login/logout and profile picture display

### All Blogs Page:
- All user-added blogs
- Filtering by category and search by blog title (using MongoDB text search)
- Search functionality across all blogs
- Each blog with title, image, short description, category, details button, wishlist button

### Blog Details Page:
- All blog information (title, image, short description, long description)
- Comment section with comment owner's name, profile picture, and ability to comment (except for blog owner)
- Conditional update button for blog owner, navigating to update route

### Add Blog Page:
- Form for blog information (title, image URL, category, short description, long description)
- Dropdown menu for category selection

### Update Blog Page:
- Pre-filled form with existing blog information for editing
- Ability to update specific details

### Featured Blogs Page:
- Table displaying top 10 posts based on long description word count
- Table includes Serial Number, Blog Title, Blog Owner, and Blog Owner Profile Picture

### Wishlist Page:
- List of all blogs wishlisted by the user
- Each blog with title, image, short description, category, details button, remove wishlist button

### Authentication:
- Email/password-based registration and login
- At least one additional social login (e.g., Facebook, Google)

### Error Handling:
- Display errors for failed login and registration attempts (password strength requirements)

### 404 Page:
- Page displayed for non-existent routes

## Technologies Used
- ReactJS
- Firebase (for authentication and data storage)
- HTML
- CSS
- JavaScript

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
