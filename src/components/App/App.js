import './App.css';
import { Router } from 'react-router-dom';
import { Component } from 'react';
import FloraService from '../../repository/floraEducationRepository'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      plants: [],
      categories: []
    }
  }

  render () {
    const {categories} = this.state.categories
    return (
      <div>
        Categories:
        {categories}
      </div>
    );
  }

  loadCategories = () => {
    FloraService.fetchPlantCategories()
    .then((data) => {
      this.setState({
        categories : data.data
      })
    })
  }

  componentDidMount() {
    this.loadCategories();
  }
}

export default App;
