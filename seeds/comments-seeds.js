const { Comment } = require('../models');

const commentData = [
  {
    body: 'Nice point of view',
  },
  {
    body: 'I really like your post',
  },
  {
    body: 'Fascinating',
},
  
 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;