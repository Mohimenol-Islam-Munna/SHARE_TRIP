import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box
      sx={{
        height: "80px",
        textAlign: "center",
        backgroundColor: "blueviolet",
      }}
    >
      <Typography> Header component </Typography>
    </Box>
  );
};

export default Header;
