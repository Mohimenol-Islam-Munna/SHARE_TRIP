import React from "react";
import Grid from "@mui/material/Grid";

// import components
import TicketDetails from "./TicketDetails";
import TicketSummary from "./TicketSummary";

const TicketInfo = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={8}>
          <TicketDetails />
        </Grid>
        <Grid item xs={12} md={4}>
          <TicketSummary />
        </Grid>
      </Grid>
    </>
  );
};

export default TicketInfo;
