import express from 'express';
import Datatest from "../../models/datatestmodel";
const datatestRouter = express.Router();



datatestRouter.route('/')
    .get((req,res) => {
        Datatest.find({}, (err, datatest) => {
            res.json(books)
        })
    .post((req, res) => {
        let datatest = new Datatest(req.body);
        
        
        // ({ product: 'easter', chocolate: 2 });

        datatest.save();
        res.status(201).send(datatest)
    })

datatestRouter.route('/:datatestId')
        .get((req, res) => {
            Datatest.findById(req.params.datatestId, (err, book)=> {
                res.json(datatest)
            })
        })

datatestRouter.route('/:datatestId'
        .get((req, res) => {
            Datatest.findById(req.params.datatestId, (err, datatest) => {
                res.json(datatest)
            })
        })
        .put((req,res) => {
            Datatest.findById(req.params.bookId, (err, datatest) => {
                datatest.product = req.body.product;
                datatest.chocolate = req.body.chocolate;
                datatet.save()
                res.json(datatest)
            })

        })
      
)
       
    })
   
export default datatestRouter;