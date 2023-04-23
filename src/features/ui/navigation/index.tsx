import React from 'react';

import map from 'lodash/map';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderMenu } from '@/mocks/header.menu';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="mt-4 flex flex-row font-medium lg:mt-0">
      {map(HeaderMenu, menu => {
        const isActive = menu.link === pathname;

        return (
          <li key={menu.name}>
            <Link
              href={menu.link}
              className={`relative rounded-lg px-3 py-2 text-sm font-light text-gray-800 transition-all duration-300 hover:bg-gray-900 hover:text-white 
                      ${
                        isActive
                          ? 'text-white before:absolute before:inset-x-[9px] before:-bottom-2 before:h-0 before:border-b-2 before:border-white'
                          : ''
                      }`}
            >
              {menu.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
