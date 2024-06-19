
// auth-access-token.model.js

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const AuthAccessToken = sequelize.define('AuthAccessToken', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tokenableId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    hash: {
      type: Sequelize.STRING,
      allowNull: false
    },
    abilities: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    lastUsedAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    expiresAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });

  return AuthAccessToken;
};

// Drop table
// sequelize.drop().then(() => {
//   console.log('Table dropped successfully!');
// }).catch((err) => {
//   console.error('Error dropping table:', err);
// });