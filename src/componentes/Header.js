import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin } from '../router/Coordinator';
import { useHistory } from 'react-router-dom';


const Header = ({rightButton, setRightButton}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    
    const logout =()=>{
        localStorage.removeItem("token")
    }

    const rightButtonAction = () =>{
        if(token){
            logout()
            setRightButton("Login")
            goToLogin(history)
        } else{
            goToLogin(history)
        }
    }
    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={()=>goToFeed(history)}>BlogPost</Button>
                    <Button color="inherit" onClick={rightButtonAction}>{rightButton}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;