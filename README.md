# TA Assesment

This project is a full stack currency converter application built using the MEAN stack. The frontend is developed in Angular with Angular Material and Bootstrap for a mobile-first, modern UI, while the backend is built with Node.js, Express, and TypeScript. The backend uses the [Free Currency API](https://freecurrencyapi.com/docs/) to retrieve live exchange rates and maintains an in-memory conversion log.

## Features

- **Currency Conversion:** Convert an amount from one currency to another using live exchange rates.
- **Conversion History:** Log all currency conversions with date and time, stored in-memory.
- **Validation:** Input validations with detailed error responses based on Free Currency API guidelines.
- **Responsive UI:** Uses Angular Material and Bootstrap to ensure a responsive, modern user interface.
- **Docker Integration:** Containerized application for consistent development and deployment.
- **Environment Configuration:** Centralized configuration using a `.env` file and a dedicated config module.

## Tech Stack

- **Frontend:** Angular, Angular Material, Bootstrap
- **Backend:** Node.js, Express, TypeScript, Axios
- **API:** [Free Currency API](https://freecurrencyapi.com/docs/)
- **Containerization:** Docker, Docker Compose

## Prerequisites

- Node.js (v14 or later)
- Angular CLI
- Docker (optional, for containerized development)
- Git

## Installation

### 1. Clone the Repository

```
git clone https://github.com/yourusername/currency-converter-mean.git
cd currency-converter-mean
```
### 2. Setup Environment Variables
Create a .env file in the backend folder with the following content (adjust values as needed):
```env
PORT=3000
CURRENCY_API_KEY=your_api_key_here
CURRENCY_API_URL=https://api.freecurrencyapi.com/v1/latest
ALLOWED_CURRENCIES=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR
```
### 3. Install Dependencies
**Backend**
Navigate to the backend folder and install dependencies:
```
cd backend
npm install
```
**Frontend**
Navigate to the frontend folder and install dependencies:
```
cd ../frontend
npm install
```
### Running the Project
1. Running the Backend in Development
For automatic reloading during development, use nodemon with TypeScript:
```
npm run dev
```
2. Running the Frontend
Use the Angular CLI to start the development server with the proxy configuration:
```
npm start
```
This command runs ng serve --proxy-config proxy.conf.json, which routes API calls to the backend.
3. Docker Setup
If you prefer to run the project in Docker containers, ensure you have Docker installed and use the provided docker-compose.yml at the project root.

**Build and Run with Docker Compose**
```
docker-compose up --build
```
This command builds and starts both the backend and frontend services:
- Backend: Runs on port 3000
- Frontend: Runs on port 80

## Folder Structure
/ta-assesment
├── backend
│   ├── src
│   │   ├── config.ts          // Loads environment variables
│   │   ├── controllers
│   │   │   └── conversion.controller.ts
│   │   ├── routes
│   │   │   └── conversion.routes.ts
│   │   └── index.ts           // Entry point for Express server
│   ├── package.json
│   ├── tsconfig.json
│   ├── nodemon.json           // Configuration for nodemon
│   └── .env                 // Environment variables for backend
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── conversion
│   │   │   │   │   ├── conversion.component.ts
│   │   │   │   │   ├── conversion.component.html
│   │   │   │   │   └── conversion.component.css
│   │   │   │   └── history
│   │   │   │       ├── history.component.ts
│   │   │   │       ├── history.component.html
│   │   │   │       └── history.component.css
│   │   │   ├── services
│   │   │   │   └── currency.service.ts
│   │   │   └── directives
│   │   │       └── thousand-separator.directive.ts
│   │   ├── proxy.conf.json     // Proxy configuration for API calls
│   │   ├── styles.css
│   │   └── index.html
│   ├── angular.json
│   └── package.json
├── docker-compose.yml
└── .gitignore

## Git Ignore
A sample .gitignore is provided at the root of the repository to exclude node modules, build files, and sensitive environment variables. See the .gitignore file for details.

## Usage
- Conversion: Use the Angular interface to convert currencies.
- History: View your conversion history in the Material table with a scrollbar.
- Input Fields: Numbers are formatted with thousand separators using a custom directive.

## Contributing
Feel free to fork this repository and submit pull requests. Please ensure your changes follow the existing code style.

## License
This project is licensed under the MIT License.

## Contact
---
This README file should provide a clear and comprehensive guide to setting up, running, and understanding your project.