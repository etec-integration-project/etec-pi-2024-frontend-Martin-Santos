import './register.css';
import { Link } from 'react-router-dom';


export default function Register() {

    return (
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="http://localhost:3000/" method='post'>
                        <h2 class="login-title">Sign Up</h2>
                        <div class="inputbox">
                            <input type="name" id="nombre" name="usuario"  required/>
                            <label for="">Name</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" />
                            <input type="password"  id="contrasena" name="password"   required/>
                            <label for="">Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" />
                            <input type="password" id="repetir-contrasena" name="password2"  required/>
                            <label for="">Repeat Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" id="email" name="email" required/>
                            <label for="">Email</label>
                        </div>
                        <p><Link to='/login' >Volver al Login</Link></p>
                        <button class="boton-login" type="submit">Regístrate</button>
                    </form>
                </div>
            </div>
        </section>


    )
}