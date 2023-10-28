'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
      {
        name: 'Naruto Uzumaki',
        todo: 'Live Coding',
        address: 'Konoha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uchiha Sasuke',
        todo: 'Wander',
        address: 'Lightning Village',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Haruno Sakura',
        todo: 'Treat patients',
        address: 'Konoha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uzumaki Boruto',
        todo: 'Play Laptop',
        address: 'Konoha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uzumaki Himawari',
        todo: 'Playing Doll',
        address: 'Konoha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Garra',
        todo: 'Live Coding',
        address: 'Suna',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {})
  }
}
