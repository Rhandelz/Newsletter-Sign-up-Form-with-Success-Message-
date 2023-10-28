import successIcon from "../assets/images/icon-success.svg";

type SuccessProps = {
  email: string | null;
  setSuccess: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};

const Success = ({ email, setSuccess }: SuccessProps) => {
  const dissmiss = () => {
    setSuccess(null);
  };

  return (
    <div className="success_container">
      <div>
        <img src={successIcon} alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been set to <b>{email}</b>.Please open it and
          click the button inside to confirm your subscription.
        </p>
        <button onClick={dissmiss}>Dismiss message</button>
      </div>
    </div>
  );
};

export default Success;
