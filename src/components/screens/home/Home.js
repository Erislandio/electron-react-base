import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <section>
      <main>Hoem aqui</main>
      <Link to="/account">Account</Link>
    </section>
  );
}

export { Home };
