const faunadb = require('faunadb');
const q = faunadb.query

console.log('secret: ', process.env.FAUNADB_SERVER_SECRET);

const clientQuery = new faunadb.Client({
  domain: 'db.us.fauna.com',
  secret: process.env.FAUNADB_SERVER_SECRET,
});

module.exports = { clientQuery, q };