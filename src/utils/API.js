import axios from "axios";

export default {
  // Gets all books
  getReeses: function() {
    return axios.get("/api/reeses");
  },
  // Gets the book with the given id
  getReeses: function(id) {
    return axios.get("/api/reeses/" + id);
  },
  // Deletes the book with the given id
  deleteReeses: function(id) {
    return axios.delete("/api/reeses/" + id);
  },
  // Saves a book to the database
  saveReeses: function(bookData) {
    return axios.post("/api/reeses", reesesData);
  }
};
