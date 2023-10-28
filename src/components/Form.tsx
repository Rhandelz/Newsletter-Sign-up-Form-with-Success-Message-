import { FormEvent, useRef, useState, ChangeEvent } from "react";
import list_check from "../assets/images/icon-list.svg";
import sideImage from "../assets/images/illustration-sign-up-desktop.svg";

type FormProps = {
  setSuccess: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};

const Form = ({ setSuccess }: FormProps) => {
  const [email, setEmail] = useState<string>("");
  const inputref = useRef<HTMLInputElement>(null);
  const labelref = useRef<HTMLLabelElement>(null);

  const sureEmail = inputref.current?.value.includes("@");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sureEmail) {
      setSuccess(email);
    } else {
      if (inputref.current && labelref.current) {
        inputref.current.style.border = "1px solid red";
        inputref.current.style.backgroundColor = "pink";
        inputref.current.style.color = "red";
        labelref.current.style.display = "block";
      }
    }
  };

  const setChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (inputref.current && labelref.current) {
      inputref.current.style.border = "1px solid gray";
      labelref.current.style.display = "none";
      inputref.current.style.backgroundColor = "transparent";
      inputref.current.style.color = "black";
    }
  };

  return (
    <div className="main_container">
      <div className="left_side">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers recieving monthly updates on:</p>
        <span>
          <img src={list_check} alt="" />
          <p>Product discovery and building what matter</p>
        </span>
        <span>
          <img src={list_check} alt="" />
          <p>Measuring to ensure updates are a success</p>
        </span>
        <span>
          <img src={list_check} alt="" />
          <p>And much more!</p>
        </span>

        <form className="send_form" onSubmit={submit}>
          <span>
            <label htmlFor="email">Email address</label>

            <label htmlFor="email" ref={labelref}>
              Valid email required
            </label>
          </span>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@company.com"
            value={email}
            ref={inputref}
            onChange={setChange}
            required
          />
          <button>Subscirbe to monthly newsletter</button>
        </form>
      </div>

      <div className="right_side">
        <div className="img_container">
          <img src={sideImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
