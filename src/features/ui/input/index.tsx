import React, { ChangeEvent, useRef, useState } from 'react';

import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;
  showErrorMessage?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, isValidate?: boolean | null) => void;
  focus?: (el: React.SyntheticEvent) => void;
  blur?: (event: any, isValidate?: boolean | null) => void;
  onKeyPress?: (e?: React.KeyboardEvent) => void;
}

const Input = ({
  name,
  type,
  placeholder,
  readOnly,
  defaultValue,
  disabled,
  showErrorMessage = true,
  focus,
  blur,
  onChange,
}: InputProps) => {
  const input = useRef<(HTMLElement & { value: string }) | null>(null);
  const [focused, setFocused] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, isValidate?: boolean | null) => {
    onChange && onChange(e, isValidate);
  };

  const handleFocus = (e: React.SyntheticEvent) => {
    setFocused(true);
    focus && focus(e);
  };

  const handleBlur = (e: React.SyntheticEvent, isValidate?: boolean | null) => {
    setFocused(false);
    blur && blur(e, isValidate);
  };

  const {
    formState: { errors },
    register,
    trigger,
  } = useFormContext();
  const { ref, ...rest } = register(name, {
    disabled,
    value: defaultValue,
    onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
      const isValidate = await trigger(name);
      handleOnChange(e, isValidate);
    },
    onBlur: async (e: React.SyntheticEvent) => {
      const isValidate = await trigger(name);
      handleBlur(e, isValidate);
    },
  });
  return (
    <div className={'w-full'}>
      <input
        type={type}
        className={classNames(
          'w-full rounded-md border border-gray-900 bg-black p-3 leading-6 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-gray-500',
          {
            'border-red-500': errors[name],
            'border-red-500 shadow-red-500': focused && errors[name],
            'bg-gray-900': readOnly,
          },
        )}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={e => handleFocus(e)}
        ref={e => {
          ref(e);
          input.current = e;
        }}
        {...rest}
      />
      {errors[name] && !disabled && showErrorMessage && (
        <span className="whitespace-nowrap py-1 text-xs text-red-500">{errors[name]?.message as string}</span>
      )}
    </div>
  );
};

export default Input;
