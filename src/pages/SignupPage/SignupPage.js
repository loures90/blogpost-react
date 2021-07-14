import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import useForm from '../../hooks/useForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { goToLogin } from '../../router/Coordinator';
import { signupUser } from '../../services/user';

const Signup = () => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({name:"", username: "", password: "" })
    const onSubmitForm = (event) => {
        event.preventDefault()
        signupUser(form, clear, history)
    }
    return (
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    type={"text"}
                />
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
                        Criar Usuário
                    </Button>
                </div>
            </form>
            <div>
                <Button
                    onClick={() => goToLogin(history)}
                    variant="contained" color="primary" variant="outlined"
                    margin="normal"
                    required>
                    Voltar para  Login
                </Button>
            </div>
        </div>
    )
}
export default Signup;