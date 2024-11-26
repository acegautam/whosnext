const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connections');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    // Get the users document
    try {
      let docs = await clientQuery.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('ujima'))),
          q.Lambda(x => q.Get(x))
        )
      );
      
      if (docs.data.length === 0) {
        // If no document exists, create one with empty arrays
        const newDoc = await clientQuery.query(
          q.Create(q.Collection('ujima'), {
            data: { 
              participants: [],
              presented: []
            }
          })
        );
        return responseObj(200, { data: [newDoc] });
      }
      
      return responseObj(200, docs);
    } catch (error) {
      console.log(error);
      return responseObj(500, error);
    }
  } else if (event.httpMethod === 'POST') {
    // Add new user to the array
    try {
      const { name } = JSON.parse(event.body);
      let docs = await clientQuery.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('ujima'))),
          q.Lambda(x => q.Get(x))
        )
      );
      
      const doc = docs.data[0]; // Get the first document
      
      const updated = await clientQuery.query(
        q.Update(doc.ref, {
          data: {
            participants: q.Append([{ name }], doc.data.participants || [])
          }
        })
      );
      return responseObj(200, updated);
    } catch (error) {
      console.log(error);
      return responseObj(500, error);
    }
  } else if (event.httpMethod === 'DELETE') {
    // Remove user from array
    try {
      const { name } = JSON.parse(event.body);
      let docs = await clientQuery.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('ujima'))),
          q.Lambda(x => q.Get(x))
        )
      );
      
      const doc = docs.data[0]; // Get the first document
      
      const updated = await clientQuery.query(
        q.Update(doc.ref, {
          data: {
            participants: q.Filter(
              doc.data.participants || [],
              q.Lambda(
                'user',
                q.Not(q.Equals(q.Select(['name'], q.Var('user')), name))
              )
            )
          }
        })
      );
      return responseObj(200, updated);
    } catch (error) {
      console.log(error);
      return responseObj(500, error);
    }
  }
};