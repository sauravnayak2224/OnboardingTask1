import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Customer } from './components/Customer';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        
        <Route path='/customer' component={Customer} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
