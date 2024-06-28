import "./styles.css";
import { getUser } from "./users";

const Card = function ({ id }) {
  const user = getUser(id);

  return (
    <div className="card border-type-a">
      <div className="card_avatar">
        <img className="card_img" src={user.avatar} alt={user.firstName} />
      </div>
      <p className="card_info">First name: {user.firstName}</p>
      <p className="card_info">Last name: {user.lastName}</p>
      <p className="card_info">Occupation: {user.occupation}</p>
      <p className="card_info">Hobby: {user.hobby}</p>
    </div>
  );
};

export default Card;
