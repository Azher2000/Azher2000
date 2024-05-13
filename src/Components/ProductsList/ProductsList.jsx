import { useState, useEffect, memo } from "react";
import ProductCard from "../ProductCard";
import "./ProductList.css";
import { Link } from "react-router-dom";
import Categories from "../Categories";
//import ProductCard from "../ProductCard";

// const products = [
//   {
//     title: "Apple iPhone14",
//     price: "Rs. 1,00,000",
//   },
//   {
//     title: "Apple iPhone13",
//     price: "Rs. 1,00,000",
//   },
//   {
//     title: "Apple iPhone12",
//     price: "Rs. 1,00,000",
//   },
//   {
//     title: "Samsung S22",
//     price: "Rs. 10,000",
//   },
//   {
//     title: "Samsung S21",
//     price: "Rs. 9,000",
//   },
// ];

// function getProductsApi(callback) {
//   setTimeout(function () {
//     callback(products);
//   }, 1000);
// }

function ProductList() {
  // const loadingState = useState(true);
  // let isLoading = loadingState[0];
  // let setIsLoading = loadingState[1];
  // const productsState = useState([]);
  // let allProducts = productsState[0];
  // let setAllProducts = productsState[1];
  //console.log("ProductList");
  const [allproducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        // console.log(res);
        setAllProducts(res);
        setIsLoading(false);
      });
  }, []);
  // console.log("api started");

  // getProductsApi(function (res) {
  //   //allProducts = res;
  //   setAllProducts(res);
  //   //console.log(allProducts);
  //   console.log("api ended");
  //   setIsLoading(false);
  // });

  const totalProducts = allproducts.length;

  if (isLoading) {
    return (
      <>
      <div>Loading...</div>
      <img
        alt="loading"
        src="https://miro.medium.com/v2/resize:fit:1400/1*e_Loq49BI4WmN7o9ItTADg.gif"
      />
      
      </>
    );
  } else {
    return (
      <>
        <Link to="/cart">Cart</Link>
        
        <p>TotalProducts:{totalProducts}</p>
        <Categories />
        <div className="products">
          {allproducts.map(function (product) {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </>
    );
  }
}

export default memo(ProductList);
