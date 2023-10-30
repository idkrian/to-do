import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";
import { createUser } from "../../helpers/api";
import { UserProps } from "../../helpers/interfaces";

interface Props {
  setPageCount: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

const SignUp = ({ pageCount, setPageCount }: Props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleForm = async (data: UserProps) => {
    try {
      await createUser(data);
      setPageCount(pageCount - 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-semibold ">Sign Up</h1>
      <div className="flex flex-col w-5/6 ">
        <input
          className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
          type="text"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <input
          className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
          type="text"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <button
          className="bg-yellow h-10 rounded-lg font-semibold mt-3 w-full"
          onClick={() => handleForm(formData)}
        >
          Sign Up
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
export default SignUp;
