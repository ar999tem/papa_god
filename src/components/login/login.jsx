import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
// import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/authReducer"
import { required } from "../../utils/validators"
import { Input } from "../common/Preloader/formsControls/formsControls"
import s from "../common/Preloader/formsControls/formsControls.module.css"

const Login = (props) => {
    const onSubmit = (FormData) => {
        props.login(FormData.email, FormData.password, FormData.rememberMe)
    }
    if (props.isAuth) return <Navigate to='/profile' />
    return <div>
        <h1>Logim</h1>
        {/* <LoginReduxForm onSubmit={onSubmit} /> */}
    </div>
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/* <div><Field placeholder={'email'} name={'email'} component={Input} validate={[required]} /></div>
            <div> <Field placeholder={'password'} name={'password'} type={'password'} component={Input} validate={[required]} /></div>
            <div> <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me</div> */}
            {props.error && <div className={s.formSummaryError}> {props.error} </div>}
            <div> <button> Login</button></div>
        </form>
    )
}
// const LoginReduxForm = reduxForm({
//     form: 'login'
// })(LoginForm)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)