const { Sequelize, DataTypes } =  require('sequelize');

// create database in SQL shell


// Connect db // new instance of Sequelize
const db = new Sequelize('cowlist', 'root', null, {
  host: "localhost",
  dialect: "mysql"
})


// Define Model
const Cow = db.define('cow', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  des: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Test Connection
db.authenticate() // connect/login to sequ to database with credentials above
  .then(db.sync()) // take schema from db.define  // { force: true } -> drops database after you save a file in vs-code
  .catch(err => console.error(err))


// Define Methods / Functions
// Create:
const save = (obj) => {
  return Cow.create(obj)
}

// Read:
const getAll = () => {
  return Cow.findAll()
}

// Update: NOT FINISHED -- CHECK!!!! { id: 'id', name: 'name', des: 'des' }
const update = ({ id, name, des }) => {
  //console.log({ id, name, des });
  // Cow.update({ name, des }, { where: { id }})
}

// Delete:
const remove = (obj) => {
  return Cow.destroy({
    where: obj
  })
}

module.exports = { save, getAll, update, remove };
// module.exports = save;
// module.exports = getAll;
// module.exports = update;
// module.exports = remove;