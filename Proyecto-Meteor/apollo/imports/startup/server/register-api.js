import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import {createApolloServer} from "meteor/apollo";
import {makeExecutableSchema} from "graphql-tools";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import  merge from 'lodash/merge';
//load schema;
//poner un mensaje y asi secesibamente
//cualqie
const testSchema=`
type Query{
  hi:String
  resolutions:[Resolution]
}`;

const typeDefs=[
  testSchema,
  ResolutionsSchema
];
//se usa en el resolver
const testResolvers={
  Query:{
    hi(){
      return "hello world from METEOR via APOLLO";
    },
    // resolutions(){
    //   return[{
    //     id: "algo",
    //     name: "just do it"
    //   }];
    // }
  }
};
//concatenando de un string
const resolvers=merge(testResolvers,ResolutionResolvers)
// console.log(resolvers);

const schema=makeExecutableSchema({
typeDefs,
resolvers
});
//manda llamar localhost:3000/graphiql
createApolloServer({schema});
