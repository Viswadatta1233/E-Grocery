import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from './footer.js';
const categories = [
  {
    name: "Vegetables",
    imageUrl: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/products/vegetables", // Navigation link
  },
  {
    name: "Fruits",
    imageUrl: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/products/fruits", // Navigation link
  },
  {
    name: "Dairy",
    imageUrl: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/products/dairy", // Navigation link
  },
  {
    name: "Seafood",
    imageUrl: "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/products/seafood", // Navigation link
  },
  {
    name: "Snacks",
    imageUrl: "https://images.pexels.com/photos/1718199/pexels-photo-1718199.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/products/snacks", // Navigation link
  },
  {
    name: "Beverages",
    imageUrl: "https://images.pexels.com/photos/3028500/pexels-photo-3028500.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/products/beverages", // Navigation link
  },
];

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (link) => {
    navigate(link); // Navigate to the respective category
  };

  return (
    <React.Fragment>
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Shop By Category</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="category-card shadow-lg rounded-3 overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body text-center p-3">
                  <h5 className="card-title">{category.name}</h5>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleCategoryClick(category.link)}
                  >
                    Go to Products →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer></Footer>
    </React.Fragment>
  );
}

export default Categories;
