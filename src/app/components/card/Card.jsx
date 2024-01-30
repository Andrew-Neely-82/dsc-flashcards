import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "./buttonGroup/ButtonGroup";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Box from "@mui/material/Box";
import "@/app/styling/globals.scss";
import * as React from "react";

const Card = ({ title }) => {
  return (
    <div className="card">
      <Box sx={{ minWidth: 275 }}>
        <MuiCard variant="outlined">
          <React.Fragment>
            <CardContent>
              {/*  */}
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Subject: flashcard.subject
              </Typography>
              {/*  */}
              <Typography variant="h5" component="div">
                flashcard.question
              </Typography>
              {/*  */}
            </CardContent>
            {/*Flip Button */}
            <CardActions>
              <Button size="small">Flip</Button>
            </CardActions>
            {/*  */}
          </React.Fragment>
          <h3>{title}</h3>
        </MuiCard>
        <ButtonGroup />
      </Box>
    </div>
  );
};

export default Card;
