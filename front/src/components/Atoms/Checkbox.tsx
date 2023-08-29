import { FaAngleRight } from "react-icons/fa6";
interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div className="flex items-center py-3 px-4 cursor-pointer border-b-2 border-[#ebebeb] align-middle relative">
      <div className="pr-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 mt-2"
        />
      </div>
      <p>{label}</p>
      <div className="absolute right-2">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default Checkbox;
