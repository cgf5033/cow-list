const { Sequelize, DataTypes } =  require('sequelize');

// create database in SQL shell

// Connect db // new instance of Sequelize
const sequelize = new Sequelize('cowlist', 'root', null, {
  host: "localhost",
  dialect: "mysql"
})

// Test Connection
sequelize
  .authenticate() // tests connection
  .then(() => {
    console.log('Connected!')
  })
  .catch(err => console.error(err))


// Define Model
const Cows = sequelize.define('Cows', {
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
})


// Create Tables
sequelize
  .sync() // tests connection
  .then(() => {
    console.log('Synced!')
  })
  .catch(err => console.error(err))


// Define Methods / Functions
let save = (param) => {
  Cows.create({
    name: param.name
    des: param.des
  })
}

let getAll = () => {
  return Cows.findAll()
}

module.exports save;
module.exports getAll;