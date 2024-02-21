Steps to run this project in your computer
-------------------------------------------

1.>install all the dependencies of the node  package manager (npm) by running `npm install` command on terminal or cmd.
2.>set up the postgreSQL database in your computer  by following these steps: 
    Setting up pgAdmin
    Download:Download pgAdmin from the official website.[download link](https://sbp.enterprisedb.com/getfile.jsp?fileid=1258649)
    Install:Run the downloaded installer and follow the on-screen instructions.
    Launch:Launch pgAdmin from your applications menu or desktop shortcut.
    Set up a master password when prompted.
3.> Make the Schemas
    i.countries table
        "CREATE TABLE countries (id serial PRIMARY KEY, country_code  varchar(2) NOT NULL,country_name varchar(20));"
        import the countries.csv file in the table

    ii. visited_countries table
        "CREATE TABLE visited_countries (id serial PRIMARY KEY, country_code VARCHAR(2))"
4.>Run the express sever using `nodemon index.js`
5.> open brower and goto the url "http://localhost:3000" and enjoy the website        