import React from 'react';
import { Formik, FormikProps, FormikConfig } from 'formik';

export const Form: React.FC<FormikConfig<any>> = ({
  children,
  ...props
}) => (
  <Formik
    {...props}
    render={(props: FormikProps<any>) => (
      <form onSubmit={props.handleSubmit}>
          {children}
      </form>
    )}
  />
);
