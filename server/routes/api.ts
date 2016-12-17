// const express = require('express');
// const router = express.Router();
//
// // declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';
//
// /* GET api listing. */
// router.get('/', (req, res) => {
//   res.send('api works');
// });
//
// // Get all posts
// router.get('/posts', (req, res) => {
//   // Get posts from the mock api
//   // This should ideally be replaced with a service that connects to MongoDB
//   axios.get(`${API}/posts`)
//     .then(posts => {
//       res.status(200).json(posts.data);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     });
// });

//module.exports = router;


import * as express from "express";
//import * as axios from "axios";
var axios = require('axios')
interface Post {
  userID: number;
  id: number;
  title: string;
  body: string;
}

namespace Route {
    export let router: express.Router = express.Router();
    const API = "https://jsonplaceholder.typicode.com";

    router.get("/", function(req, res) {
        res.send("Tu bedzie API home page");
    });

    // Get all posts
    router.get('/posts', (req, res) => {
      // Get posts from the mock api
      // This should ideally be replaced with a service that connects to MongoDB

      axios.get(`${API}/posts`)
        .then(posts => {
          res.status(200).json(posts.data);
        })
        .catch(error => {
          res.status(500).send(error)
        });
    });

}

export let api = Route.router;
