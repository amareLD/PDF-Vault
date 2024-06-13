# PDFVault

## Description
Welcome to PDFVault, A simple MERN stack application that allows users to upload and view PDF files with basic logging and security features.
This document provides instructions on how to run the application.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)


## Prerequisites

Before you begin, ensure you have met the following requirements:

-  have installed the latest version of [Node.js](https://nodejs.org/).
- have a code editor, preferably [Visual Studio Code](https://code.visualstudio.com/).

## Installation

To install PDFVault, follow these steps:

1. Clone the repository & running the frontend and backend servers:

```sh
git clone https://github.com/amareLD/PDF-Vault/tree/master

## Running the Application

## Setup

1. Install dependencies for backend: `npm install`.
2. Create a `.env` file and add MongoDB URL and JWT secret.
3. Start the backend server: `node server.js`.
4. Install dependencies for frontend: `cd frontend && npm install`.
5. Start the frontend server: `npm start`.
6. Start both frontend and backend servers together "in the root folder": `npm run dev` 


## Features
- User authentication (sign up, login, logout).
- PDF upload and viewing.
- Logging of API requests.
- Security with JWT and bcrypt.
- Modern UI design.