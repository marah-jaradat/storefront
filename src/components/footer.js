import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box data-testid="footer">
      <Divider />
      <Typography mt={2} align="center">
        Site by <a href="https://github.com/Beers15">Alexander Beers</a>{" "}
      </Typography>
      <Typography align="center" sx={{ color: "gray" }}>
        React + Redux + Material UI
      </Typography>
    </Box>
  );
};

export default Footer;
