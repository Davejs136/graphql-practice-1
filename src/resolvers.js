import { task } from './sample';

import User from './models/User';

// resolvers: Se especifica lo que retornara la consulta
//            con funciones
// Query:    ----> proceso de consultas
// Mutation: ----> Ingreso de nuevos datos

export const resolvers = {
  Query: {
    hello: () => 'Hello world with Graphql',
    greet: (root, { name }, ctx) => `Hello ${name}`,
    age:   () => 19,
    task:  () => task,
    showContext: (_,{algo}, ctx) => console.log(ctx),
    Users: async () => await User.find()
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = task.length;
      task.push(input);
      return input;
    },

    async createUser(_, { input }) {
      const user = new User(input);
      await user.save()
      return user;
    },

    async deleteUser(_, { _id }) {
      return await User.findByIdAndDelete(_id)
    },

    async updateUser(_, _id, { input }) {
      return await User.findByIdAndUpdate(_id, input, {new: true})
    }
  }
};