import React from "react";
import './signIn.scss';
import Button from '@mui/material/Button';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=8fb4e6b3e50e49d6bfeb840c5d8a511a&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const LoginPage = () => {

    return (
        <div className="login">
            <div className="login_container">
                <div className="texts">
                    <h1>Hello 👋🏻</h1>
                    <h3>First you have to sign in in <span className="spotify">Spotify</span></h3>
                    <p>You can do it by clicking this button here</p>
                    <a href={AUTH_URL}><Button variant='outlined'>Sign in</Button></a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;

// http://localhost:5173/?code=AQCI-rTmUquzS_3FX6WuZ9oHbFHMak637QIuC3KiXUw28M38wYFoNTvtdtKq0dpCmXtTuxo-VhZSCjvURMypbqqAMWc20A_VjLqraMpqulLPd5zifA2yICOpq3yr4EOP6VuR_lf55KbIWloGEfl8AjWhmh543PCvXO0tmKp94QpmvZfByMryzR3YIrKnvR_cKMlNIOyopt1CnAdHt9M8gGGCPlJ89MlM_r5zh5Yvlo2KroN3cfNc2ViyW7UYIGT3X67ql4N8QZtpL4biE_MaOnBRjBRVqW1WL-uyeY9s0V8Q-J7Wb51hhJBnX7cCdG3ywRQxJ4bKOvDJQPAKWXKHp4GZhmlwjLU