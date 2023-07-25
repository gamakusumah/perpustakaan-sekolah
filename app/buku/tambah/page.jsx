import TambahForm from "../components/TambahForm";

const TambahPage = () => {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/buku`;
  return (
    <div>
      <TambahForm apiUrl={apiUrl} />
    </div>
  );
};

export default TambahPage;
