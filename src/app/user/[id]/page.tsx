"use client";
type PageProps = {
  params: {
    id: string;
  };
};

const YourAccount: React.FC<PageProps> = async ({ params }) => {
  return (
    <div>
      <h1 className="text-2xl">YourAccount-Page {params.id}</h1>
    </div>
  );
};

export default YourAccount;
