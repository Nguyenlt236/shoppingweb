import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header"
import Banner from "./component/Banner"
import CategoriesBar from "./component/Categories bar"
import NewArrivals from "./component/New Arrivals block/index.jsx"
import Deals from "./component/Deals"
import Shipping from "./component/Shipping"
import Footer from "./component/Footer"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <CategoriesBar />
        <NewArrivals />
        <Deals />
        <Shipping />
        <Footer />
      </div>
    );
  }
}

export default App;
