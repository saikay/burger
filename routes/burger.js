const burgerController = require("../controllers/burger");

module.exports = (app) =>{
  app.put("/api/devoured/", burgerController.updateOne);
  app.post("/api/burgers", burgerController.insertOne);  
  app.get("/",burgerController.home);
}
