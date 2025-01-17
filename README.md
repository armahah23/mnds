# MndS

<p align="center">
  <span style="font-size: 4rem; font-weight: bold; color: #4299e1; animation: bounce 2s infinite;">MndS</span>
  <br>
  <span style="font-size: 1.5rem; color: #4a5568;">Movies and Web Series you loved</span>
</p>

MndS is a Movie and Web Series web application where users can log in or sign up, search for movies and web series, view ratings, and get news about new movie releases. The application is managed by an admin who handles all the content, while users can only view the information.

## Features

- User authentication (login/signup)
- Search for movies and web series
- View ratings and reviews
- Get news about new movie releases
- Separate frontends for users and admin

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** JSON Server (for a simple server setup)

## Project Structure

The project is divided into two separate frontends:

1. **User Frontend:** Accessible at `localhost:3000`
2. **Admin Frontend:** Accessible at `localhost:3001`

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/mnds.git
    cd mnds
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the JSON Server:
    ```sh
    npm run json-server
    ```

4. Start the User Frontend:
    ```sh
    npm start
    ```

5. Start the Admin Frontend:
    ```sh
    npm run start-admin
    ```

## Expected Completion

The application is expected to be completed by **31st January**.

## License

This project is licensed under the MIT License.
