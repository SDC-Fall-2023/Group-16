# Backend

## Local Setup

1. Get MySQL downloaded locally and start the database server. Make sure to remember your password
2. Open a terminal and cd into group-16/backend/schema
3. run "mysql -u <name of account (ex: root)> -p" Enter your password when prompted
4. run "source ratingSchema.sql" then run "source foodLocationSchema.sql"
5. create a .env file in the root of the backend folder and define the following

PORT='choose port number'<br>
MYSQL_HOST='127.0.0.1'<br>
MYSQL_USER='username here'<br>
MYSQL_PASSWORD='your password here'<br>
MYSQL_DATABASE='madEats'<br>

6. use "npm run dev" to start the backend server. This uses nodemon to monitor for changes and automatically restart the server when changes are detected.
