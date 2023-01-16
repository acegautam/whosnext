const { responseObj, requestObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connections');

exports.handler = async (event, context) => {
  console.log('------ UPDATE CALLED -------');
  let { name } = requestObj(event.body);
  try {
    let chosen = await clientQuery.query(
      q.Create(q.Collection('presented'), { data: { name } })
    );
    return responseObj(200, chosen);
  } catch (error) {
    console.log(error);
    return responseObj(500, error);
  }
};
