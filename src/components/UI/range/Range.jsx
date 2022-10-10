import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Range({ text, ...props }) {
  return (
    <div className="range">
      <h3 className="text">{text}</h3>
      <Slider {...props} range />
    </div>
  );
}

export default Range;
