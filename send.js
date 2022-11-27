import { useState } from "react";

const Send = () => {
  const [sendMessege, setSendMessege] = useState("");
  const [messege, setMessege] = useState([]);

  const sendMessegeHandler = (event) => {
    // event.target.value to take the input value
    setSendMessege(event.target.value);
  };

  const onSubmitHandler = (event) => {
    // event.preventDefault(); means that the web when send somthing it lose the data so this prevent losing data
    event.preventDefault();
    // بصمة بشرحها بعدين😂
    setMessege((currentmessege) => [...currentmessege, sendMessege]);
    // we setSendMessege to "" so after sending messege the input will be empty
    setSendMessege("");
  };

  return (
    <div>
      {/* form takes onSubmit function */}
      <form onSubmit={onSubmitHandler}>
        <input
          type={"text"}
          value={sendMessege}
          onChange={sendMessegeHandler}
        />
        {/* we use button type submit since we using <form> component */}
        <button type={"submit"}>send</button>
        {/* we have arrey of element so we use map بشرحها بعدين */}
        {messege.map((text) => {
          // console.log(text) if we open the console and we send messege it show in the console
          console.log(text);
          return <h2 key={text}>{text}</h2>;
        })}
      </form>
    </div>
  );
};
export default Send;
