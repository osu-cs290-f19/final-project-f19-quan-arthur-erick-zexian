const axios = require("axios");
const express = require("express");
const fs = require("fs");
const exphbs = require("express-handlebars");
const path = require("path");

const getTextbookPublicKey = "Yl8lgkJbZUoGo3A5GZGAmNZf5PCvM45n";
const getTextbookSecretKey = "JLku2OLJXiVIQ4Wc";
const grantType = "client_credentials";
const year = 2020;
const term = "Winter";
let getTextbookAccessToken;
const params = new URLSearchParams();
const bodyParser = require("body-parser");
const app = express();
let results;
let textbookData = [];

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/home", (req, res) => {
  console.log("serving index.html");
  fs.readFile(
    path.join(__dirname + "/data/courseData.json"),
    "utf-8",
    (err, data) => {
      if (err) console.log(err);
      else {
        res.status(200).send(JSON.parse(data));
      }
    }
  );
});

app.get("/create_post/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  res.sendFile(path.join(__dirname + "/public/create_post.html"));
});

app.get("/create-post", (req, res) => {
  /* Will need to add isbn data as a field to this */
  res.status(200).render("create_post");
});

var existingData = require("./data/postData.json");

function getCount(req) {
  var counter = 0;
  for (var i = 0; i < existingData.length; i++) {
    if (existingData[i].isbn == req) {
      counter++;
    }
  }
  return counter;
}

app.post("/createPost", (req, res) => {
  req.body.count = getCount(req.body.isbn);
  console.log(req.body);
  existingData.push(req.body);
  fs.writeFile(
    "./data/postData.json",
    JSON.stringify(existingData, null, 2),
    err => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("== postData.json has been written to.");
      }
    }
  );
  res.status(200).send();
});

app.get("/search/:course", async (req, res) => {
  const course = req.params.course;
  const inputIndex = course.match(/[0-9]/).index;
  const major = course.substring(0, inputIndex).trim();
  const courseNumber = course.substr(inputIndex, 3);

  results = await getTextbook(major, courseNumber);

  res.status(200);
  res.render("home", {
    results: results
  });
});


app.get("/sell", (red, res, next) => {
  res.render("sell");
});


app.get('/details/:isbn/:postID', (req, res, next) => {
  var dataFile = fs.readFileSync("postData.json");
  var data = JSON.parse(dataFile);
  //console.log(data);
  var index = -1;
  var toMatchID = req.params.postID;
  var toMatchISBN = req.params.isbn;
  // console.log("ID", toMatchID);
  // console.log("ISBN", toMatchISBN);
  
  var filteredPost = data.find(function(item, i){
    // console.log("Item count", item.count);
    // console.log("Item ISBN", item.isbn);
    if (item.isbn == toMatchISBN && item.count == toMatchID) {
       index = i;
      return i;
    }
  });

  //console.log(index, filteredPost);
  if (index != -1) {
    //return page
    res.status(200).render('./partials/bookDescription', {
      imgSource: data[index].imageURL,
      bookTitle: data[index].title,
      ISBN: data[index].isbn,
      bookEdition: "Test",
      bookAuthor: data[index].author,
      bookPrice: data[index].price,
      bookCondition: data[index].condition,
      meetPreference: data[index].meetupInfo,
      contactEmail: data[index].email,
      contactPhone: data[index].phone,
      userDescription: data[index].description
    });
  } else {
    next();
  }
});

app.get("*", function(req, res) {
  res.status(404).render("404");
});

app.listen(3000, () => console.log("server is running on port 3000.."));

// Get access token
function getTextbook(subject, courseNumber) {
  console.log("fetching textbooks");
  params.append("client_id", getTextbookPublicKey);
  params.append("client_secret", getTextbookSecretKey);
  params.append("grant_type", grantType);
  return axios
    .post("https://api.oregonstate.edu/oauth2/token", params)
    .then(res => {
      getTextbookAccessToken = "Bearer " + res.data.access_token;
      return axios
        .get("https://api.oregonstate.edu/v1/textbooks", {
          params: {
            academicYear: year,
            term: term,
            subject: subject,
            courseNumber: courseNumber
          },
          headers: {
            Authorization: getTextbookAccessToken
          }
        })
        .then(res => {
          return res.data.data;
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
