import axios from "axios";

export default {
  // Gets all books
  getReeses: function() {
    return axios.get("/api/reeses");
  },
  // gettheReeses: function() {
  //   return axios.get("/api/reeses");
  // },
  // // Gets the book with the given id
  // getAReeses: function(id) {
  //   return axios.get("/api/reeses/" + id);
  // },
  // // Deletes the book with the given id
  // deleteReeses: function(id) {
  //   return axios.delete("/api/reeses/" + id);
  // },
  // // Saves a book to the database
  // saveReeses: function(theData) {
  //   return axios.post("/api/reeses", theData);
  // }

  matchName: function(nameData) {
    return axios.post('/api/saveName', nameData);
  }

  
};


// ------
// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/recipes", { params: { q: query } });
//   }
// };
