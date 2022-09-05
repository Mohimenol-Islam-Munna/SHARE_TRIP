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
        <Box sx={{ minHeight: "100vh" }}>
          <Grid container sx={{ border: "1px solid palegreen" }}>
            {/* left sidebar  */}
            <Grid item xs={12} sm={3} sx={{ border: "1px solid salmon" }}>
              <LeftSideBar />
            </Grid>
            {/* main content  */}
            <Grid
              item
              xs={12}
              sm={9}
              sx={{ border: "1px solid blue", p: "10px" }}
            >
              <MainContent />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ShareTrip;
