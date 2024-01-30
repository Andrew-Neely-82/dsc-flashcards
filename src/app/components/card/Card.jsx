import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Box from "@mui/material/Box";

const Card = ({ subject, question, answer }) => {
  const props = {
    subject: {
      sx: {
        fontSize: 14,
      },
      color: "text.secondary",
    },
    text: {
      variant: "h5",
      component: "div",
    },
    button: {
      variant: "outlined",
      size: "small",
    },
  };

  return (
    <div className="card">
      <Box sx={{ minWidth: 275 }}>
        <MuiCard variant="outlined">
          <Typography {...props.subject}>{subject}flashcard.subject</Typography>
          <Typography {...props.text}>
            {question}flashcard.question
            <br />
            {answer}flashcard.answer
          </Typography>
          <Button {...props.button}>Flip</Button>
        </MuiCard>
      </Box>
    </div>
  );
};

export default Card;
