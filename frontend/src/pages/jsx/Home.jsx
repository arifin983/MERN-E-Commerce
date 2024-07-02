import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Alert from "@mui/material/Alert";

import "../css/Home.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../jsx/ProductCard";

import Loader from "../jsx/Loader";
import MetaData from "../../components/MetaData";
import { getProducts } from "../../store/actions/productAction";


const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, currentProducts } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    console.log("hello")
    dispatch(getProducts({}));
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          {error && (
            <Alert className="error" variant="filled" severity="error">
              Error:{error}
            </Alert>
          )}
          <div className="container" id="container">
            {currentProducts &&
              currentProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
