const Cube = ({ color }: { color: string }) => {
  return (
    <div
      className={`bg-${color} rounded-sm p-2 items-center justify-center content-center`}
    />
  );
};

export default Cube;
