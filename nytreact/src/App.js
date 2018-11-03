import React, { Component } from 'react';
import './App.css';

class SavedArticlesRow extends Component {
  render() {
    const title = "test"
    const notes = "notes"

    return (
      <div className="mx-auto card col-md-12 m-2 p-3">
        <div className="row">
          <div className="col">
            <h5 className="float-left">{title}</h5>
            <button className="float-right"></button>
          </div>
        </div>
        <div className="mx-auto card col-md-12 m-1 p-2">
        <div className="row">
        <div className="col">
          <p>Notes: <span>{notes}</span></p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

class SavedArticles extends Component {
  render() {

    return (
      <div className="row">
        <div className="mx-auto card col-md-8 m-2 p-3">
          <h3>Saved Articles</h3>
          <div className="container">
            <SavedArticlesRow

            />
          </div>
        </div>
      </div>

    )
  }
}

class ResultsRow extends Component {
  render() {
    const title = "test"

    return (
      <div className="mx-auto card col-md-12 m-2 p-3">
        <div className="row">
          <div className="col">
            <h5 className="float-left">{title}</h5>
            <button className="float-right">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

class Results extends Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto card col-md-8 m-2 p-3">
          <h3>Results</h3>
          <div className="container">
            <ResultsRow
            />
          </div>
        </div>
      </div>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto card col-md-8 m-2 p-3" >
          <h3>Search</h3>
          <h5>Topic</h5>
          <input
          />
          <h5>Start Year</h5>
          <input
          />
          <h5 >End Year</h5>
          <input
          />
          <button className="mx-auto mt-3" style={{width:100}}>Search</button>
        </div>
      </div>

    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto">
          <h2>New York Times Article Scrubber</h2>
          <h5>Search for and annotate articles of interest!</h5>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <SavedArticles />
        <Results />



      </div>
    );
  }
}

export default App;
