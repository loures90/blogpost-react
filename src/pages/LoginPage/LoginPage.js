import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import useForm from '../../hooks/useForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { goToSignup } from '../../router/Coordinator';
import { loginAuth } from '../../services/user';


const Login = ({rightButton, setRightButton}) => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: "", password: "" })
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        loginAuth(form, clear, history, setRightButton)
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required

                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Username"}
                    type={"text"}

                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Password"}
                    type="password"
                />
                <div>
                    <Button type={"submit"} variant="contained" color="primary" variant="outlined"
                        margin="normal"
                        required>
                        Entrar
                    </Button>
                </div>
            </form>
            <div>
                <Button
                    onClick={()=>goToSignup(history)}
                    variant="contained" color="primary" variant="outlined"
                    margin="normal"
                    required>
                    Cadastre-se
                </Button>
            </div>
        </div>
    )
}
export default Login;