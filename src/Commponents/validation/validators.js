import validator from 'validator';
import React from 'react';
export const required = (value) => {
  if (value.toString().trim() === '') {
    return 'This input must be filled out';
  }
  return "";
};
 
export const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
  return "";
};
 
export const lt = (value, minLength) => {
  if (value.toString().trim().length < minLength) {
    return `The value exceeded ${minLength} symbols.`
  }
  return "";
};
 export const password = (value, components) => {
  if (value !== components.value) {
    return <span className="error">Passwords are not equal.</span>
  }
  return "";
};
 
