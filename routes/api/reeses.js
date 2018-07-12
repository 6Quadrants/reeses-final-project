const express = require('express');
const Reeses = require("../../models/reesesmodel");
const reesesRouter = express.Router();



reesesRouter.route('/')
    .get((req,res) => {
        Reeses.find({}, (err, reeses) => {
            res.json(reeses)
        })

//     .post((req, res) => {
//         let reeses = new Reeses(req.body);
      
//         reeses.save();
//         res.status(201).send(reeses)
//     })

// reesesRouter.route('/:reesesId')
//         .get((req, res) => {
//             Reeses.findById(req.params.reesesId, (err, book)=> {
//                 res.json(reeses)
//             })
//         })

// reesesRouter.route('/:reesesId'
//         .get((req, res) => {
//             Reeses.findById(req.params.reesesId, (err, reeses) => {
//                 res.json(reeses)
//             })
//         })
//         .put((req,res) => {
//             Reeses.findById(req.params.reesesId, (err, reeses) => {
//                 reeses.product = req.body.product;
//                 reeses.chocolate = req.body.chocolate;
//                 reeses.save()
//                 res.json(reeses)
//             })

//         })
      
// )
       
    })
   
module.exports = reesesRouter;