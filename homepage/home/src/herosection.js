import React from 'react';
import Categories from './components.js';
function Herosection(){
    return(
        <React.Fragment>
        <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4">We Bring the Store to Your Door!</h1>
          <p className="lead">
            Get fresh groceries delivered to your home quickly and conveniently.
          </p>
          <button className="btn btn-success btn-lg mx-2">
            <i className="fa-solid fa-shopping-bag"></i> Shop Now
          </button>
        </div>
      </section>
      <Categories></Categories>
      </React.Fragment>
    );
}
export default Herosection;