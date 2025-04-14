export default function Product({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1 className="text-2xl">Product-Page {id}</h1>
    </div>
  );
}
