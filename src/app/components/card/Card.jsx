import "@/app/globals.scss";
import ButtonGroup from "../buttonGroup/ButtonGroup";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ButtonGroup />
    </div>
  );
};

export default Card;
