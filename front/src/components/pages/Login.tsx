import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";
interface Props {
  setLogged?: Dispatch<SetStateAction<boolean>>;
  setRouteCount?: Dispatch<SetStateAction<number>>;
}
const Login = ({ setLogged, setRouteCount }: Props) => {
  const [pageCount, setPageCount] = useState(0);

  const SignIn = () => {
    return (
      <>
        <h1 className="text-4xl font-semibold ">Sign in</h1>
        <div className="flex flex-col w-5/6">
          <input
            className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
            type="text"
            placeholder="Password"
          />
          <button
            className="bg-yellow h-10 rounded-lg font-semibold mt-3"
            onClick={() => {
              setRouteCount!(1);
              setLogged!(true);
            }}
          >
            Sign in
          </button>
        </div>
        <p
          className="font-semibold mt-2 cursor-pointer "
          onClick={() => setPageCount(pageCount + 1)}
        >
          Don't have an account? Sign Up
        </p>
      </>
    );
  };
  const SignUp = () => {
    return (
      <>
        <h1 className="text-4xl font-semibold ">Sign Up</h1>
        <div className="flex flex-col w-5/6 ">
          <input
            className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
            type="text"
            placeholder="Password"
          />
          <input
            className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
            type="text"
            placeholder="Confirm Password"
          />
          <button
            className="bg-yellow h-10 rounded-lg font-semibold mt-3"
            onClick={() => {
              setRouteCount!(1);
              setLogged!(true);
            }}
          >
            Sign in
          </button>
        </div>
        <p
          className="font-semibold mt-2 cursor-pointer"
          onClick={() => setPageCount(pageCount - 1)}
        >
          Already have an account? Sign In
        </p>
      </>
    );
  };
  const LoginPages = () => {
    if (pageCount === 0) {
      return <SignIn />;
    } else {
      return <SignUp />;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  w-1/3">
      {LoginPages()}
    </div>
  );
};

export default Login;
