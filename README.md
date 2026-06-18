# AI Mock Interview Platform

A full-stack mock interview application built using React, TypeScript, Node.js, Express, MongoDB Atlas, JWT Authentication, and Tailwind CSS.

## Features

* User Registration & Login
* JWT Authentication
* Protected Routes
* Create Mock Interviews
* Technical Interview Questions
* Answer Submission Flow
* Interview Progress Tracking
* Results Dashboard
* Responsive Tailwind UI
* MongoDB Atlas Integration

## Tech Stack

### Frontend

* React
* TypeScript
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

## Project Structure

```bash
frontend/
├── src/
│   ├── pages/
│   ├── components/
│   ├── routes/
│   └── services/

backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── services/
```

## Authentication Flow

1. User registers an account.
2. User logs in.
3. Backend generates JWT token.
4. Token is stored in localStorage.
5. Protected routes require valid authentication.

## Interview Flow

1. User logs in.
2. User creates a mock interview.
3. Questions are generated and displayed.
4. User answers each question.
5. Answers are stored locally.
6. Results page displays questions, answers, and score.

## Gemini AI Integration

The application architecture was designed to support Gemini AI generated interview questions.

A Gemini service layer and controller integration were implemented during development.

However, the public Gemini API quota available during development returned:

* 429 Too Many Requests
* Free-tier quota exceeded
* Daily request limit exceeded

Because of these API quota restrictions, a mock question generator was used instead to keep the application fully functional.

The codebase remains AI-ready and can be connected to Gemini, OpenAI, or another LLM provider by updating the interview generation service.

## Future Improvements

* AI-generated interview questions
* AI answer evaluation
* Voice-based interviews
* Webcam integration
* Interview history storage
* Performance analytics
* Admin dashboard

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Backend `.env`

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key
```

## Screens

* Login
* Register
* Dashboard
* Create Interview
* Interview Session
* Results

## Author

Ghanshyam Jadhav

Built as a portfolio project to demonstrate full-stack application development, authentication, REST APIs, database integration, and scalable AI-ready architecture.
