import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

// type Query -------> Consultas
// type Task --------> Especifico que tendra el objeto para realizar el query
// type Mutation ----> Permite agregar data a la base de dato(POST || UPDATE)
// input TaskInput --> Entrada de datos, especifica lo que el usuario tiene que ingresar

// Query:
// greet(name: String!): String
//    greet()  ----> La consulta
//    name:    ----> Parametro a pasar
//    String   ----> El tipo de dato a ingresar, es opcional
//    String!  ----> Es requerido el parametro
//    : String ----> Lo que va a retornar

const typeDefs = `

  type Query {
    hello: String
    greet(name: String!): String
    age: Int
    task: [Task]
    showContext(algo: String): String
    Users: [User]
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  type User {
    _id: ID
    firstname: String!
    lastname: String!
    age: Int
  }

  type Mutation {
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id: ID, input: UserInput): User
  }

  input TaskInput {
    title: String!
    description: String!
    number: Int
  }

  input UserInput{
    firstname: String!
    lastname: String!
    age: Int
  }

`;

// typeDefs: Lo que permite hacer consultas
// resolvers: Respuesta al hacer la consulta

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})