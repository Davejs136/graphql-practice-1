import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'
import { connect } from "./database";

const app = express();
connect();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

// Permite usar el entorno grafico de graphql

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: {
    message: 'Test'
  }
}))

app.listen(3000, () => console.log('Server on port 3000'));