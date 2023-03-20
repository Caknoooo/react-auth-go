import React from "react";

const Home = (props: { nama: string }) => {
  return <div>{props.nama ? "Hi " + props.nama : "You are not logged in"}</div>;
};

export default Home;
