import TambahForm from "../components/TambahForm";

const TambahPage = () => {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/peminjam`;
  return (
    <main>
      <TambahForm apiUrl={apiUrl} />
    </main>
  );
};

export default TambahPage;
