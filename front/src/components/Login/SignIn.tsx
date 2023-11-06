import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";
import { login } from "../../helpers/api";
import { toast } from "../../lib/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface Props {
  setPageCount: Dispatch<SetStateAction<number>>;
  pageCount: number;
}
const SignIn = ({ pageCount, setPageCount }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleForm = async (email: string) => {
    const userId = await login(email);
    try {
      if (userId.error) {
        return toast({
          variant: "destructive",
          title: userId.message,
        });
      }
      localStorage.setItem("userId", userId.id);
      navigate("/today");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-4xl font-semibold ">Sign in</h1>
      <div className="flex flex-col w-5/6">
        <input
          className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <input
          className="w-full h-10 rounded-lg p-4 bg-transparent border-[lightgray] border border-solid my-2"
          type="text"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        /> */}
        <button
          className="bg-yellow h-10 rounded-lg font-semibold mt-3 w-full"
          onClick={() => handleForm(email)}
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
export default SignIn;
