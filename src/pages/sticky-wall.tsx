import CreateSticker from "@/components/stickywall/CreateSticker";

const StickyWall = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <div className="flex flex-col rounded-xl shadow-xl p-6 bg-green-300 w-full max-w-80 h-[21rem]">
        <h1 className="font-semibold text-3xl">Social Media</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          itaque perspiciatis id vitae debitis quasi nihil voluptatibus
          laboriosam quae. Perferendis voluptatibus error id sed animi in
          placeat nihil sint. Nam?
        </p>
      </div>
      <div className="flex flex-col rounded-xl shadow-xl p-6 bg-green-300 w-full max-w-80 h-[21rem]">
        <h1 className="font-semibold text-3xl">Social Media</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          itaque perspiciatis id vitae debitis quasi nihil voluptatibus
          laboriosam quae. Perferendis voluptatibus error id sed animi in
          placeat nihil sint. Nam?
        </p>
      </div>
      <CreateSticker />
    </div>
  );
};

export default StickyWall;
