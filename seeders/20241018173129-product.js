'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          id: 1,
          name: 'Bread',
          quantity: 4,
          inStock: true,
          productImage:
            'https://res.cloudinary.com/morelmiles/image/upload/v1649765314/download_nwfpru.jpg',
          price: 500,
          expiryDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1, // Referência à categoria "Confectionaries"
        },
        {
          id: 2,
          name: 'Milk',
          quantity: 4,
          inStock: true,
          productImage:
            'https://res.cloudinary.com/morelmiles/image/upload/v1647356184/milk_ckku96.jpg',
          price: 100,
          expiryDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2, // Referência à categoria "Drinks"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
