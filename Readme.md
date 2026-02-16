This is a backend application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting.


## Features

- User sign up and login with Aadhar Card Number and password
- User can view the list of candidates
- User can vote for a candidate (only once)
- Admin can manage candidates (add, update, delete)
- Admin cannot vote

## Stacks used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication
- bcrypt

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbhishekNSingh/Voting-bakend-project.git






# API Endpoints

## Authentication

### Sign Up
- `POST /user/register`: Sign up a user

### Login
- `POST /user/login`: Login a user

## Candidates

### Get Candidates
- `GET /candidate`: Get the list of candidates

### Add Candidate
- `POST /candidate`: Add a new candidate (Admin only)

### Update Candidate
- `PUT /candidate/:id`: Update a candidate by ID (Admin only)

### Delete Candidate
- `DELETE /candidate/:id`: Delete a candidate by ID (Admin only)

## Voting

### Get Vote Count
- `GET /vote/count`: Get the count of votes for each candidate

### Vote for Candidate
- `POST /vote/:id`: Vote for a candidate (User only)

## User Profile

### Get Profile
- `GET /user/profile`: Get user profile information

### Change Password
- `PUT /user/profile/password`: Change user password
