// import mui compoents
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// import components
import Title from "../components/shared/Title";
import LeftSideBar from "../components/LeftSideBar";
import MainContent from "../components/MainContent";
import Container from "@mui/material/Container";

const ShareTrip = () => {
  return (
    <>
      <Title>Share Trip</Title>
      <Container>
        <Box sx={{ my: "10px" }}>
          <Grid container spacing={2}>
            {/* left sidebar  */}
            <Grid item xs={12} sm={3}>
              <LeftSideBar />
            </Grid>

            {/* main content  */}
            <Grid item xs={12} sm={9}>
              <MainContent />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ShareTrip;
