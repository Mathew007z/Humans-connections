import * as React from "react";
import useForm from "../../hooks/useForm";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import LogoEntry from "../LogoEntry/LogoEntry";
// import { Button } from "@mui/material";
import '../../css/login.css';
import Loader from "../Loader/Loader";
const initialForm = {
  name:'',
  email: '',
  comments:''
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  // trim omite cualquier caracter de espacios en blanco. que solo evalue si tiene informacion o no.
  if(!form.name.trim()){
    errors.name = "El campo 'Nombre' es requerido"
  }else if(!regexName.test(form.name.trim())){
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco';
  }
  if(!form.email.trim()){
    errors.email = "El campo 'Email' es requerido"
  }else if(!regexEmail.test(form.email.trim())){
    errors.email = 'El campo "Email" es incorrecto';
  }
  if(!form.comments.trim()){
    errors.comments = "El campo 'Comments' es requerido"
  }else if(!regexComments.test(form.comments.trim())){
    errors.comments = 'El campo "Comments" solo acepta hasta 255 caracteres';
  }
  return errors
};

const styles = {
  fontWeight: "bold",
  color:'#dc3545'
}

export default function Login() {

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm);
  


  return (
    <div className="container-div">
      <LogoEntry/>
      <h2 className="title-login">Registro de Ingreso</h2>
      <form  className="form-login" onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Escribe tu nombre" 
        onChange={handleChange} 
        onBlur={handleBlur}
        value={form.name} 
        required
        />
        {errors.name && <span style={styles}>{errors.name}</span>}
        <input 
        type="email" 
        name="email" 
        placeholder="Escribe tu email" 
        onChange={handleChange} 
        onBlur={handleBlur}
        value={form.email} 
        required
        />
        {errors.email && <span style={styles}>{errors.email}</span>}
        <textarea 
        name='comments' 
        cols='50' 
        rows='5' 
        placeholder='Como nos conociste?'
        onChange={handleChange} 
        onBlur={handleBlur}
        value={form.comments} 
        required
        ></textarea>
        {errors.comments && <span style={styles}>{errors.comments}</span>}
        <input type="submit" value='Registrarse' className="submit-closure"/>
        {loading && <Loader/>}
        {response && <p>Los datos han sido enviados</p>}
      </form>

    </div>
  );
}
