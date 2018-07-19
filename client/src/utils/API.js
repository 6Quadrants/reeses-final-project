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
  },

  matchValue: function(formData) {
    return axios.post('api/formDrop', formData);
  },

  saltyValue: function(saltyData) {
    return axios.post('api/formSalty', saltyData);
  },

  sweetValue: function(sweetData) {
    return axios.post('api/formSweet', sweetData);
  },

  smoothValue: function(smoothData) {
    return axios.post('api/formSmooth', smoothData);
  },


};


// ------
// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/recipes", { params: { q: query } });
//   }
// };
