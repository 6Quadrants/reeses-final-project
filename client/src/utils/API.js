import axios from "axios";

export default {
  getReeses: function() {
    return axios.get("/api/reeses");
  },
 

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

  meltyValue: function(meltyData) {
    return axios.post('api/formMelty', meltyData);
  },

  chewyValue: function(chewyData) {
    return axios.post('api/formChewy', chewyData);
  },


};

