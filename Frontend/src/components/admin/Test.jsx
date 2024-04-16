import { Link } from "react-router-dom";
import toEditMenuIcon from "../../assets/pictures/pen-to-square-solid.svg"

function AdminNav() {
  return (
    <>
      <Link>
        <div>
          <img src={toEditMenuIcon} alt="To edit menu." />
        </div>
      </Link>
    </>
  );
}

export default AdminNav;
