import React from 'react';
import logo from './logo.svg';
import './App.css';


import { ApolloProvider, useQuery, gql } from '@apollo/client';
import client from './config';
import  getAllMessages  from './schema/Schema';
import Test from './components/Test';


function App() {


  // if(loading){
  //   return <div>Loading</div>
  // }
  // if(error){
  //   return <div>Error</div>
  // }
  return (
    <ApolloProvider client={client}>
    <Test/>
  </ApolloProvider>
  );
}

export default App;
