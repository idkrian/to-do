type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4 text-black bg-snowWhite">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-5xl font-semibold capitalize">{title}</h1>
        <div className="text-3xl font-semibold border h-full w-10 rounded-lg flex items-center justify-center">
          5
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
