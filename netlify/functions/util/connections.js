const faunadb = require('faunadb');
const q = faunadb.query

const clientQuery = new faunadb.Client({
  domain: 'db.us.fauna.com',
  scheme: 'https',
  port: 443,
  secret: process.env.FAUNADB_SERVER_SECRET,
});

module.exports = { clientQuery, q };