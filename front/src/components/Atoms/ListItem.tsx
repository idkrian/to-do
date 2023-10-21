import MenuItem from "./MenuItem";
import Cube from "./Cube";
import { TaskProps } from "../../helpers/interfaces";

interface ListItemProps {
  data: TaskProps[];
  cubeColor: string;
  label: string;
}

const ListItem = ({ data, cubeColor, label }: ListItemProps) => {
  return (
    <div className="flex">
      <MenuItem icon={<Cube color={cubeColor} />} label={label} />
      <div className="border-2 px-2 h-1/2 rounded-md bg-[#dddddd] my-auto ">
        <h1 className="font-bold text-sm">
          {data.filter((i) => i.list === label.toLowerCase()).length}
        </h1>
      </div>
    </div>
  );
};

export default ListItem;
