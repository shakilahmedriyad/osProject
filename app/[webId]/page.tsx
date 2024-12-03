import NewForm from "./component/NewForm";

export default async function New({
  params,
}: {
  params: Promise<{ webId: number }>;
}) {
  const { webId } = await params;
  return (
    <div className="h-full  mx-auto w-full flex flex-col ">
      <NewForm id={webId} />
    </div>
  );
}
