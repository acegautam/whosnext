const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connections');

exports.handler = async (event, context) => {
  try {
    const response = await clientQuery.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('presented')), { size: 9999 }),
        q.Lambda(['ref'], q.Delete(q.Var('ref')))
      )
    );
    return responseObj(200, response);
  } catch (error) {
    console.log(error);
    return responseObj(500, error);
  }
};
