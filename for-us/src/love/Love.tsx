import "./Love.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

function Love() {
  const navigate = useNavigate();

  const handleLetterClick = () => {
    navigate("/message"); // Navigate to the new page
  };
  return (
    <div>
      <div className="love-container">
        <h1 className="love-text">
          <span>I</span> <span>Love</span> <span>You</span>
        </h1>
      </div>
      <h4 className="cool-text">
        <span>I want to say something,</span> <br />
        <span>click on the letter below</span>
      </h4>
      <div className="clickable-letter" onClick={handleLetterClick}>
        <FaEnvelope className="letter-icon" />
      </div>
    </div>
  );
}

export default Love;
