const HomePage = () => {
  const data = new Date();
  return (
    <>
      <h1>HomePage</h1>
      <div>{data.getFullYear()}</div>
    </>
  );
};

export default HomePage;
