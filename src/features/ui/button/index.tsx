import React from 'react';

import classNames from 'classnames';
import { AiOutlineLoading } from 'react-icons/ai';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  name: string;
  icon?: any;
  disabled?: boolean;
  isLoading?: boolean;
  link?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, variant = 'primary', name, icon, link, disabled, isLoading, onClick }: ButtonProps) => {
  const base = 'flex w-full h-12 justify-center items-center gap-5 group rounded-md border px-3 transition-all duration-300';

  const getVariantClass = () => {
    if (variant === 'secondary') {
      return 'bg-white border-white text-black hover:text-white hover:bg-black';
    }
    if (variant === 'link') {
      return 'h-0 px-0 border-none hover:text-gray-500';
    }
    return 'bg-primary text-white border-primary hover:text-primary hover:bg-transparent';
  };

  const getIconClass = () => {
    if (variant === 'secondary') {
      return 'fill-black border-white text-black group-hover:fill-white';
    }
    return 'fill-white group-hover:fill-primary';
  };

  if (isLoading) {
    return (
      <div className={classNames(base, getVariantClass())}>
        <AiOutlineLoading size={24} className="animate-spin" />
      </div>
    );
  }

  if (link) {
    return (
      <div className={classNames(base, getVariantClass())}>
        {icon && React.cloneElement(icon, { size: 24, className: `transition-all duration-300 ${getIconClass()}` })}
        {children}
      </div>
    );
  }

  return (
    <button name={name} id={name} className={classNames(base, getVariantClass())} disabled={disabled} onClick={onClick}>
      {icon && React.cloneElement(icon, { size: 24, className: `transition-all duration-300 ${getIconClass()}` })}
      {children}
    </button>
  );
};

export default Button;
