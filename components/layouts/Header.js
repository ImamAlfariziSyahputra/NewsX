import React from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a
              className="link-secondary"
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/profile')}
            >
              Frank
            </a>
          </div>
          <div className="col-4 text-center">
            <a
              className="blog-header-logo text-dark"
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/')}
            >
              NewsX
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center gap-3">
            <a className="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-2"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <a
              className="btn btn-sm btn-outline-secondary"
              onClick={() => router.push('/register')}
            >
              Register
            </a>
            <a
              className="btn btn-sm btn-outline-secondary"
              onClick={() => router.push('/login')}
            >
              Login
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
