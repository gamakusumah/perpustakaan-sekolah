import TambahForm from "../components/TambahForm";

const TambahPage = () => {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/pustakawan`;
  return (
    <main>
      <TambahForm apiUrl={apiUrl} />
    </main>
  );
};

export default TambahPage;
