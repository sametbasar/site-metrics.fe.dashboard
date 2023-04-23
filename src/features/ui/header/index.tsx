'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '../button';
import Navigation from '../navigation';

const Header = () => {
  return (
    <header>
      <nav className="mb-4 border-b border-b-gray-900 bg-black p-4 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 lg:gap-14">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/vercel-icon-light.svg" width={25} height={25} alt="SiteMetrics Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SiteMetrics</span>
          </Link>
          <div className="flex w-full items-center lg:w-auto">
            <Navigation />
          </div>
          <div className="flex min-w-[200px] items-center gap-10">
            <Link href="/user/login">
              <Button name="login" variant="link" link>
                <span>Login</span>
              </Button>
            </Link>

            <Link href="/user/register">
              <Button name="sign-up" variant="secondary" link>
                <span>Sign Up</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
