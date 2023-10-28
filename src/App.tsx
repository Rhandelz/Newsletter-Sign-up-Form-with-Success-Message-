import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [successUsr, setSuccess] = useState<string | null>();

  console.log(successUsr);

  return (
    <>
      {successUsr ? (
        <Success email={successUsr} setSuccess={setSuccess} />
      ) : (
        <Form setSuccess={setSuccess} />
      )}
    </>
  );
}

export default App;
