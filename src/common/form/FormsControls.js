import React from "react";
import {Field} from "redux-form";

export const FormControl = ({child, meta:{touched, error}, children}) => {
  const hasError = touched && error;

  return (
    <div className={'form-control' + (hasError ? ' error' : '')}>
      {children}
      <div className="alert">{error}</div>
    </div>
  )
};

export const Textarea = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>;
};

export const Input = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>;
};

export const createField = (placeholder, name, component, validate, props) => {
  return (
    <div className={'default'}>
      <Field placeholder={placeholder}
             name={name}
             component={component}
             validate={validate}
             {...props}
      />
    </div>
  )
};