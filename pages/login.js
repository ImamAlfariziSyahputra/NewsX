import Image from 'next/image';
import React from 'react';

export default function Login() {
  return (
    <div className="login__container">
      <main className="form-signin">
        <form className="login__form">
          <div className="mb-4">
            <Image
              src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            />
          </div>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating w-100">
            <input
              type="email"
              className="form-control mb-2"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating w-100">
            <input
              type="password"
              className="form-control mb-2"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary my-3" type="submit">
            Sign in
          </button>
          <p className="mt-5 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </div>
  );
}
