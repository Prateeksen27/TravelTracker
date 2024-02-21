import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const client = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"root",
  port:5432
})

client.connect().then(()=>{
  console.log(`Database connected Successfully`);
})
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  var result = await client.query('select country_code from visited_countries')
  var country = result.rows.map((row)=> row.country_code)
  console.log(country);
  res.render('index.ejs',{total:country.length, countries : country});
});

app.post('/add',async (req ,res)=>{
  var  countryName= req.body.country;
  countryName = countryName.substring(0,1).toUpperCase() + countryName.substring(1,countryName.length).toLowerCase();
  const result = await client.query(`select country_code from countries where country_name = ($1)`,[countryName])
  console.log(result.rows[0].country_code);
  client.query('insert into visited_countries (country_code) values($1)',[result.rows[0].country_code])
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});