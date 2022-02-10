const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new tutorial
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title && !req.body.description){
        res.status(400).send(false);
        return;
    }
    // Create a tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : true
    };
    // Save Tutorial in the database
    Tutorial.create(tutorial)
        .then(data => res.status(201).send(true))
        .catch(err => {
            console.log(err);
            res.status(500).send(false);
        });
};

// Find all tutorials
exports.findAll = (req, res) => {
    Tutorial.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(false);
        });
};

// Find specific tutorial
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findByPk(id)
        .then(data => {
            if(data){
                // If found.
                res.status(200).json(data);
            }
            else{
                // If not found.
                res.status(404).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(false);
        });
};

// Update one tutorial
exports.update = (req, res) => {
    const id = req.params.id;
    const tutorial = {
        title: req.body.title,
        description: req.body.description
    };
    Tutorial.update(tutorial, {
        where: {
            id: id
        }
    })
        .then(num => {
            if(num == 1){
                // If data found.
                res.status(201).send(true);
            }
            else{
                // If not found.
                res.status(400).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(false);
        });
};

// Delete tutorial
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.destroy({
        where:{
            id: id
        }
    })
        .then(num => {
            if(num == 1){
                // If data found.
                res.status(201).send(true);
            }
            else{
                // If not found.
                res.status(400).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(false);
        });
};

// Delete all tutorial
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.status(201).send(true))
        .catch(err => {
            console.log(err);
            res.status(500).send(false);
        });
};

// Find all published tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({
        where: {
            published: true
        }
    })
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(false);
        });
};