import React from "react";

function Footer() {
  return(
      <React.Fragment>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 GroceryStore. All Rights Reserved.</p>
          <p>
            Follow us:{" "}
            <i className="fa-brands fa-facebook mx-2"></i>
            <i className="fa-brands fa-twitter mx-2"></i>
            <i className="fa-brands fa-instagram mx-2"></i>
          </p>
        </div>
      </footer>
      </React.Fragment>
  )
}

export default Footer;