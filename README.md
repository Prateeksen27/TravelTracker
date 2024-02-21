# Install Dependencies
npm install

# Set Up PostgreSQL Database
## Download pgAdmin: 
Download pgAdmin from the official website: https://sbp.enterprisedb.com/getfile.jsp?fileid=1258649
## Install pgAdmin: 
Run the downloaded installer and follow the on-screen instructions.
## Launch pgAdmin: 
Launch pgAdmin from your applications menu or desktop shortcut. Set up a master password when prompted.

# Create Schemas
## Countries Table: 
Run the following SQL command to create the countries table:
CREATE TABLE countries (
  id serial PRIMARY KEY,
  country_code varchar(2) NOT NULL,
  country_name varchar(20)
);
Import the countries.csv file into the table.
## Visited Countries Table: 
Run the following SQL command to create the visited_countries table:
CREATE TABLE visited_countries (
  id serial PRIMARY KEY,
  country_code VARCHAR(2)
);

# Run Express Server
nodemon index.js

# Open the Website
Open your web browser and go to the following URL: http://localhost:3000
Explore and enjoy the website!
