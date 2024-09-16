import { Link } from "react-router-dom";
import toEditMenuIcon from "../../assets/pictures/pen-to-square-solid.svg"

function AdminNav() {
  return (
    <>
    <div>Hello I am admin nav</div>
      <Link to="/edit">
        <div>
          <img src={toEditMenuIcon} alt="To edit menu." style={{width:100}}/>
          <div>Go to edit page</div>
        </div>
      </Link>
    </>
  );
}

export default AdminNav;
