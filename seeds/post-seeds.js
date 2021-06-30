  
const { Post } = require('../models');

const postData = [
  {
    title: 'Tech Blog',
    body:"what a mess!"
  },
  {
    title: 'Tech Blog',
    body:"Is this working?!"
  },
  {
    title: 'Tech Blog',
    body:"Do we get an ID?!"
  },
  {
    title: 'Tech Blog',
    body:"what a mess!"
  },
  {
    title: 'Tech Blog',
    body:"Why is this happening to me??!"
  },
];

const seedPost= () => Post.bulkCreate(postData);

module.exports = seedPost;