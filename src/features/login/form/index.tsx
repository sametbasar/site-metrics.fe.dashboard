'use client';

import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { CiLogin, CiMail } from 'react-icons/ci';
import * as yup from 'yup';

import Button from '@/features/ui/button';
import Input from '@/features/ui/input';

type FormData = {
  email: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(5)
      .when('email', (_, field) => (showPassword ? field.required() : field)),
  });
  const loginFormMethods = useForm<FormData>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (values: FormData) => {
    // first check email is exist?
    // if is exist open password area
    // if not show error label.

    try {
      if (values.email !== '') {
        setLoading(true);
        setTimeout(() => {
          setShowPassword(true);
          setLoading(false);
        }, 1500);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormProvider {...loginFormMethods}>
      <form className="flex w-full max-w-xs flex-col gap-5" onSubmit={loginFormMethods.handleSubmit(onSubmit)}>
        <h1 className="mb-5 text-3xl font-semibold">Login with email</h1>
        <Input name="email" placeholder="Email address" readOnly={showPassword} />
        {showPassword && <Input name="password" type="password" placeholder="Password" />}
        <Button name="Login" icon={showPassword ? <CiLogin /> : <CiMail />} isLoading={loading}>
          <span>{showPassword ? 'Login' : 'Continue with Email'}</span>
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
