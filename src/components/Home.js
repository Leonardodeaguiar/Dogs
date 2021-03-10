import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helpers/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Dogs Homepage" />
      <Feed />
    </section>
  );
};

export default Home;
