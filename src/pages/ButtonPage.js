import { GoAlert, GoFileMedia, GoInfo, GoPin, GoRepo } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    // console.log("Clicked!!");
  };

  const handleMouseOver = () => {
    console.log("Mouse Over");
  };

  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GoAlert />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoFileMedia />
          secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoInfo />
          success
        </Button>
      </div>
      <div>
        <Button warning>
          <GoPin />
          warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoRepo />
          danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
