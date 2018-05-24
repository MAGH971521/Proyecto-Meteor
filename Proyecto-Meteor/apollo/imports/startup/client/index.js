import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
//conexion con el cliente
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import App from "../../ui/App";
//conexion con apollo
const httplink=new HttpLink({//crea liga con meteor y apollo
  uri:Meteor.absoluteUrl("graphql")
});

////varible de memoria
const cache=new InMemoryCache();
//recibe un objeto, Se descarga en memoria
const client=new ApolloClient({
  link:httplink,
  cache
});
const ApolloApp=()=>(//funcion anonima
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
Meteor.startup(()=>{
  render(<ApolloApp />,document.getElementById('app'))//renderizar app
});
//que es apollo
//que es meteor
