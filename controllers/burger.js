const db = require("../models");

// Object for all our SQL statement functions.
module.exports = {
  home: function(req,res) {
    db.Burger.findAll({ raw: true })
      .then(dataModel => {
        res.render("index", {burgers:dataModel});
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)});
  },
  insertOne: function(req,res) {
    console.log({burger_name:req.body.name, devoured:0});
   
    db.Burger.create({burger_name:req.body.name, devoured:0})
      .then(dataModel => res.status(200).json(dataModel))
      .catch(err => res.status(422).json(err));
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(req,res) {
    db.Burger.update({devoured: 1},{where:{id:req.body.id}})
      .then(dataModel => res.status(200).json(dataModel))
      .catch(err => res.status(422).json(err));
  }
};
