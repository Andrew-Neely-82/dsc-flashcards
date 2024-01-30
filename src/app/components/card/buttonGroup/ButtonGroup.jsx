import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";

const ButtonGroup = () => {
  return (
    <div className="ButtonGroup">
      <Button variant="outlined">
        <NavigateBeforeIcon />
      </Button>
      <Button variant="outlined">
        <NavigateNextIcon />
      </Button>
    </div>
  );
};
export default ButtonGroup;
