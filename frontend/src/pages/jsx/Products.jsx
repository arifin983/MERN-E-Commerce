import React, { Fragment, useEffect, useState } from "react";
import "../css/Products.css";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import Slider from '@mui/material/Slider';
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Loader from "./Loader";
import MetaData from "../../components/MetaData";
import { getProducts } from "../../store/actions/productAction";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";


const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = () => {
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 1000000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    currentProducts,
    loading,
    error,
    productsCount,
    productsPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const {keyword} = useParams()
  // const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    const query ={keyword, currentPage, price, category, ratings}
    dispatch(getProducts(query));
  }, [dispatch,keyword, currentPage, price, category, ratings, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {currentProducts &&
             currentProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={1000000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {error && (
            <Alert className="error" variant="filled" severity="error">
              Error:{error}
            </Alert>
          )}
          {productsPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={productsPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;