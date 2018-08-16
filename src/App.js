import React, { Component } from 'react';
// https://github.com/mqschwanda/node-monorepo/tree/master/packages/firebase-containers
import { snapshotContainer } from '@mqschwanda/firebase-containers';

import { db, seeder } from './firebase';
import firebaseLogo from './firebase-logo.svg';
import reactLogo from './react-logo.svg';

import './App.css';

const doc = db.collection(seeder.collection).doc(seeder.id);
const container = snapshotContainer(doc);

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo react-logo" alt="react logo" />
          <img src={firebaseLogo} className="App-logo" alt="firebase logo" />
          <h1 className="App-title">Welcome to React Firebase</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Firebase doc:&nbsp;
          <code>
            {this.props.snapshot && JSON.stringify(this.props.snapshot.data())}
          </code>
        </p>
      </div>
    );
  }
}

export default container(App);
