const { responseObj, requestObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connections');

exports.handler = async (event, context) => {
  let { refId, team, presented } = requestObj(event.body);
  try {
    let chosen = await clientQuery.query(
      q.Update(
        q.Ref(q.Collection(team), refId), { data: { presented } })
    );
    return responseObj(200, chosen);
  } catch (error) {
    console.log(error);
    return responseObj(500, error);
  }
};
