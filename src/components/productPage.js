import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  CardMedia,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const ProductPage = (props) => {
  const { id } = useParams();

  /* inefficient work around for not being able to pass id into mapStateToProps
     with react-router-dom v6 to get correct product as prop */
  const getProduct = () => {
    let match = props.products.find((entry) => {
      return entry.id.toString() === id;
    });
    console.log(match);
    return match;
  };

  return (
    <Paper
      elevation={7}
      style={{ display: "flex", justifyContent: "center", width: "800px" }}
    >
      <Box
        m={3}
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          width: "500px",
        }}
      >
        <Paper sx={{ padding: "20px 50px" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "300", textAlign: "center" }}
          >
            {getProduct(id) && getProduct(id).name.toUpperCase()}
          </Typography>
          <Typography
            mb={1}
            sx={{
              color: "lightslategrey",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            {getProduct(id) &&
              (getProduct(id).description ||
                "Oh dear... No description for this product is available.")}
          </Typography>
          <CardMedia
            component="img"
            height="360"
            image={getProduct(id) && getProduct(id).imageUrl}
            alt="Product image"
          />
          <Box mb={3} sx={{ display: "flex" }}>
            <Typography sx={{ flexGrow: 1 }} variant="h6">
              In Stock: {getProduct(id) && getProduct(id).inventoryCount}
            </Typography>
            <Typography variant="h6">
              ${getProduct(id) && getProduct(id).price.toFixed(2)}
            </Typography>
          </Box>

          <Typography mt={2} variant="h5">
            Product Details
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Specifications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If there were more product details, they would go here
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>User Reviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If there were user reviews, they would go here
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Box>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(ProductPage);
