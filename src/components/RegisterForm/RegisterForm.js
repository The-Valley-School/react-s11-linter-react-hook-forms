import { useForm } from 'react-hook-form';
import React from 'react';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => setFormData(data);

  return <div className='register-form'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='First name' type='text' {...register('firstName')} />
      <input placeholder='Last name' type='text' {...register('lastName')} />
      <button type='submit'>Aceptar</button>
    </form>

    <h2>Datos del formulario:</h2>
    <p>First name: {formData?.firstName}</p>
    <p>Last name: {formData?.lastName}</p>
  </div>;
};

export default RegisterForm;
