import React from 'react'

const validation = (inputs) => {
  const regExpMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g;
  const regExpPassword = new RegExp("[0-9]");
  const errors = {};
  if(!inputs.email) {
    errors.email = 'Debe ingresar un email'
  }
  if(!regExpMail.test(inputs.email)) {
    errors.email = 'Debe ingresar un email válido'
  }
  if(inputs.email.length > 35) {
    errors.email = 'El email no puede superar los 35 caracteres'
  }
  if(!regExpPassword.test(inputs.password)) {
    errors.password = 'La password debe tener al menos un número'
  }
  if(inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = 'La password debe tener entre 6 y 10 caracteres'
  }

  return errors;
}

export {validation};
 