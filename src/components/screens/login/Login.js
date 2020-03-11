import React from "react";
import "./login.css";

const backgroundImage = `https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`;

export const Login = () => {
  return (
    <section id="login-section">
      <main className="main-content">
        <div
          className="image-login"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div>
          <div>
            <h1>LOGIN</h1>
            <p>Login to your account</p>
          </div>
          <form>
            <div>
              <label>EMAIL ADDRESS</label>
              <input placeholder="Email" type="email" />
            </div>
            <div>
              <label>PASSWORD</label>
              <input placeholder="Senha" type="passeword" />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};
