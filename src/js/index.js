require("../css/style.scss");
require("../css/styleSearchBar.scss");
require("../css/styleButton.scss");
const axios = require("axios");
const _ = require("lodash");

const conteinerAuthors = document.querySelector(".authors");
axios
  .get("https://openlibrary.org/subjects/fantasy.json")
  .then((response) => {
    let resp = response.data;
    console.log(resp); // Accesso ai dati della risposta

    let authors = _.get(resp, "works", []);
    authors.forEach((element) => {
      let objAuthors = _.get(element, "authors[0].name", "sconosciuto");
      let objTitle = _.get(element, "title", "sconosciuto");
      console.log(`Author: ${objAuthors} Title: ${objTitle}`);
    });

    /*
    let titleArray = [];
    let title = _.get(resp, "works");
    title.forEach((element) => {
      titleArray.push(_.get(element, "title"));
    });
    console.log(titleArray);
    conteinerAuthors.textContent = titleArray;*/

    //let title = _.get(resp, "works[0].title");
    //console.log(_.get(resp, "works"));

    /*let newObj = {
      name: authors,
      bookTitle: title,
    };*/
    /*let newArray = Object.entries(newObj).map(
      ([key, value]) => `${key}: ${value}`
    );
    console.log(newArray);*/

    //works.forEach((element) => console.log(element));
    //proviamo a creare un nuovo array dalla risposta e poi far iterare su tutti creando un'altro array coppia valore
  })

  .catch((error) => {
    console.error(error);
  });
