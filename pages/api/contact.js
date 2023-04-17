// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export default async function asynchandler(req, res) {
  const { name, email, message} = req.body;
  
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });
  
  const query = gql`
  mutation CreateMessage($name: String, $email: String, $message: String) {
    createMessages(data: {name: $name, email: $email, message: $message}) 
    { id }
  }
  `;
  
  try {
    const result = await graphQLClient.request(query, req.body);
    
    return res.status(200).send(result);
    
  } catch(err) {
    console.log(err);
  }
}