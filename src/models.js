
var Sequelize = require("sequelize");

var sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: function() { },
  define: {
    sync: { force: true },
    underscored: true
  }
});


var Post = sequelize.define('Post', {
  text: Sequelize.TEXT,
  randid: Sequelize.STRING,
  filetype: Sequelize.STRING,
  stdin: Sequelize.TEXT
});


var force_reset = process.env.RESET;
sequelize.sync({ force: force_reset }).then(function() {
  console.log("Synced SQL DB to models");
});

// all models defined need to be required somewhere before the main setup is called
module.exports.instance = sequelize;
module.exports.Post = Post;