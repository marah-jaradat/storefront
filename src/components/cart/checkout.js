import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Box, TextField, Paper, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import swal from "sweetalert";

const Checkout = (props) => {
  const [value, setValue] = useState(null);

  return (
    <div style={{ marginTop: "100px" }}>
      <Paper sx={{ padding: "20px 50px" }}>
        <Typography variant="h5">Order Summary</Typography>
        {props.products &&
          props.products.map((product) => {
            return (
              <div key={product.id}>
                <Typography sx={{ fontWeight: 700 }} mt={2}>
                  {product.name} (x{product.amount})
                </Typography>
                <Typography variant="subtitle1">
                  ${(product.price * product.amount).toFixed(2)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "lightslategrey", fontWeight: 700 }}
                >
                  {product.description ||
                    "Oh dear... No description for this product is available."}
                </Typography>
              </div>
            );
          })}
        {props.products && (
          <p>
            Total: $
            {props.products
              .reduce((sum, entry) => {
                return sum + entry.price * entry.amount;
              }, 0)
              .toFixed(2)}
          </p>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Box sx={{ display: "flex", flexDirection: "row" }} mt={1}>
            <Box mr={2} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography mt={3} variant="h6">
                Billing Address
              </Typography>
              <TextField
                mt={2}
                id="full-name"
                variant="standard"
                required
                label="Full Name"
              />
              <TextField
                id="address"
                variant="standard"
                required
                label="Address"
              />
              <TextField id="city" variant="standard" required label="City" />
              <TextField id="state" variant="standard" required label="State" />
              <TextField id="zip" variant="standard" required label="zip" />
            </Box>

            <Box ml={2} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography mt={3} variant="h6">
                Payment Details
              </Typography>
              <TextField
                mt={2}
                id="credit-card-number"
                variant="standard"
                required
                label="Credit Card #"
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Expiration"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField id="CCV" variant="standard" required label="CCV" />
            </Box>
          </Box>
          <Button
            sx={{ marginTop: "20px", width: "300px" }}
            type="submit"
            variant="contained"
          >
            Place Your Order
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  //application only has form for practice purposes, doesn't process values
  swal(
    "Order Complete",
    `Thank you ${e.target[0].value} for your patronage!`,
    "success"
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

export default connect(mapStateToProps)(Checkout);
