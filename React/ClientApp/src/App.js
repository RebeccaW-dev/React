import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import './custom.css'
import { Customer } from './components/Customer';
import { Product } from './components/Product';
import { Sales } from './components/Sales';
import { Store } from './components/Store';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/customer' component={Customer} />
        <Route path='/product' component={Product} />
        <Route path='/sales' component={Sales} />
        <Route path='/store' component={Store} />
      </Layout>
    );
  }
}
