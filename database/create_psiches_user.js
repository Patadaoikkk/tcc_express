const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'ysql' // or 'postgres' or 'qlite'
});

const Psyche = sequelize.define('Psyche', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING(254),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  confirmPassword: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  crp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

// Create table
sequelize.sync().then(() => {
  console.log('Table created successfully!');
}).catch((err) => {
  console.error('Error creating table:', err);
});        

// Drop table
// sequelize.drop().then(() => {
//   console.log('Table dropped successfully!');
// }).catch((err) => {
//   console.error('Error dropping table:', err);
// });