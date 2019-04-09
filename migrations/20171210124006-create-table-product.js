// TODO uncomment this when using sequelize

// 'use strict';
//
// module.exports = {
//   up(queryInterface, Sequelize) {
//     return queryInterface.sequelize.transaction({ autocommit: true }, t => {
//       return queryInterface
//         .createTable('Product',
//           {
//             id: {
//               type: Sequelize.INTEGER,
//               primaryKey: true,
//               autoIncrement: true
//             },
//             createdAt: { type: Sequelize.DATE },
//             updatedAt: { type: Sequelize.DATE },
//             deletedAt: { type: Sequelize.DATE },
//             title: { type: Sequelize.STRING },
//             description: { type: Sequelize.STRING },
//             imageSrc: { type: Sequelize.STRING },
//             discount: { type: Sequelize.INTEGER },
//             price: { type: Sequelize.DOUBLE },
//           }
//         );
//     });
//   },
//
//   down(queryInterface, Sequelize) {
//     return queryInterface.sequelize.transaction({ autocommit: true }, t => {
//       return queryInterface.dropTable('Product');
//     });
//   }
// };
