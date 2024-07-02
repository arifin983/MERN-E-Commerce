import React, { Fragment, useEffect, useState } from "react";
import "../css/ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { Rating } from "@mui/material";
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import Loader from "../jsx/Loader";
import MetaData from "../../components/MetaData";
import ReviewCard from "../jsx/ReviewCard";
import Carousel from "../jsx/Carousel";
import { getProductDetails, newReview, resetState } from "../../store/actions/productAction";
import { addItemsToCart } from "../../store/actions/cartActions";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const options = {
    size: "large",
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };
  console.log(quantity);
  const addToCartHandler = () => {
    const newQty = quantity
    dispatch(addItemsToCart({id, newQty}));
    console.log(id, quantity);
  };
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const reviewSubmitHandler = () => {
    // const myForm = new FormData();
    // myForm.set("rating", rating);
    // myForm.set("comment", comment);
    // myForm.set("productId", id);
    const reviewData = { comment, rating, productId: id };
    dispatch(newReview(reviewData));
    console.log(reviewData);
    setOpen(false);
  };

  useEffect(() => {
    
    if (success) {
     dispatch(resetState())
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, reviewError, success]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product?.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <Carousel product={product} />

            <div className="second-div">
              <div className="detailsBlock-1">
                <h2>{product?.name}</h2>
                <p>Product # {product?._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product?.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`Rs${product?.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product?.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product?.Stock < 1 ? "redColor" : "greenColor"}>
                    {product?.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product?.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={+rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          {error && (
            <Alert className="error" variant="filled" severity="error">
              Error:{error}
            </Alert>
          )}
          {product?.reviews && product?.reviews[0] ? (
            <div className="reviews">
              {product?.reviews &&
                product?.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
          {reviewError && (
            <Alert className="alert" variant="filled" severity="error">
              Error:{reviewError}
            </Alert>
          )}
          {success && (
            <Alert className="alert" severity="success">Review Submitted Successfully</Alert>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
