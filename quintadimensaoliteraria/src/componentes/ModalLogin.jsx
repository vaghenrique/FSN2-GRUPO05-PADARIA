import React, {useState} from "react";
import BotaoL from "./BotaoL";
import '../styles/ModalLogin.css';

function ModalLogin(){
    const [active, setactive] = useState(true);
    function Activer(){
        setactive(!active);
    }

    return(

        <div>
            <BotaoL label="Login" click={Activer} />
        <div className={`conteinerModal ${active ? 'sumir' : ''}`}>
            <button className="x" onClick={Activer}>X</button>
            <div className="ModalLogin">
                <form>
                    <h1>Sign in</h1>
                    <div className="contas">
                        <label>
                            <input type="radio" name="account" value="faceb"/>
                            <span>f</span>
                        </label>
                        <label>
                            <input type="radio" name="account" value="google"/>
                            <span>G</span>
                        </label>
                        <label>
                            <input type="radio" name="account" value="linke"/>
                            <span>in</span>
                        </label>
                    </div>
                    <p>ou use sua conta</p>
                    <input type="email" placeholder="Email" name="email" />
                    <input type="password" placeholder="Senha" name="senha" />
                    <br/>
                    <br/>
                    <a href="/">Esqueceu sua senha?</a>
                    <br/>
                    <br/>
                    <button type="button" onClick={Activer}>Sign in</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default ModalLogin;
