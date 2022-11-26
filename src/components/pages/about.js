import { NUMBERS__DATA } from "./DmmyData";

const About = (props) => {
  return (
    <div>
      <h2>about section</h2>
      {/* <button onClick={multibuleandler}>*</button> */}
      <button onClick={props.onDecrment}>-</button>
    </div>
  );
};
export default About;
