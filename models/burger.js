module.exports = function(db, DataTypes) {
  const Burger = db.define("burger", {
    burger_name: {
      type: DataTypes.STRING
    },

    devoured: {
      type: DataTypes.INTEGER
    }
  });
  return Burger;
};
