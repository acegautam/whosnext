const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connections');

exports.handler = async (event, context) => {
  try {
   let participants = await clientQuery.query(
     q.Map(
       q.Paginate(q.Documents(q.Collection('participants'))),
       q.Lambda(x => q.Get(x))
      )
    )
    return responseObj(200, participants)
  } catch (error) {
    console.log(error)
    return responseObj(500, error);
  }
};