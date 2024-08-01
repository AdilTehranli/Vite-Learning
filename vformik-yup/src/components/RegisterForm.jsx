import React from "react";
import { useFormik } from "formik";
import { RegisterFormShemas } from "../schemas/RegisterFromShemas";

const RegisterForm = () => {

  const submit = (values,action) =>{
    console.log(values);
    console.log(action);
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
    validationSchema: RegisterFormShemas,
    onSubmit : submit
  });

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Write Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Write Age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Write Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Repeat Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div>
          <input
            type="checkbox"
            name="term"
            checked={values.term}
            onChange={handleChange}
          />
          <label htmlFor="term">I accept all terms</label>
          {errors.term && <p>{errors.term}</p>}
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
