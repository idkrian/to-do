import { useState } from "react";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";

const Login = () => {
  const [pageCount, setPageCount] = useState(0);

  const LoginPages = () => {
    if (pageCount === 0) {
      return <SignIn setPageCount={setPageCount} pageCount={pageCount} />;
    } else {
      return <SignUp setPageCount={setPageCount} pageCount={pageCount} />;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  w-1/3">
      {LoginPages()}
    </div>
  );
};

export default Login;
