import Form from "./Form";
import useLetters from "../hooks/useLetters";
import Alert from "./Alert";

const AppLetters = () => {
  const { alert } = useLetters();

  return (
    <>
      <header>Letter Finder App</header>

      <Form />

      <main>{alert && <Alert>{alert}</Alert>}</main>
    </>
  );
};

export default AppLetters;
