import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import style from "./../common/FormsControls/FormsControls.module.css"




const LoginForm = ({ handleSubmit, error }) => (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          validate={[required]}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          type={"password"}
          validate={[required]}
          name={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div>
     {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
);

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={`/profile/${props.id}`} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id
});

export default connect(mapStateToProps, { login })(Login);
