'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        trim: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        trim: true,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true,
      },
      inStock: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      productImage: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true,
      },
      expiryDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
          as: 'categoryId'
        }
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};






