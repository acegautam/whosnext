const { responseObj, requestObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connections');

exports.handler = async (event, context) => {
  let { refId, team } = requestObj(event.body);
  try {
    let response = await clientQuery.query(
      q.Update(
        q.Ref(q.Collection(team), refId), { data: { presented: [] } })
    );
    return responseObj(200, response);
  } catch (error) {
    console.log(error);
    return responseObj(500, error);
  }
};
