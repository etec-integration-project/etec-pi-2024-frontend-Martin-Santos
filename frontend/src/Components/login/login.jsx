import "./login.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [formData, setForm] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${PROCESS.ENV.BACKEND_URL}/autenticacion/iniciar-sesion`, {
                email: formData.email,
                password: formData.password
            });

            // Guardar el token en localStorage
            localStorage.setItem('token', response.data.token);

            alert("Inicio de sesión exitoso");
            navigate('/'); 
        } catch (error) {
            console.log("Error al iniciar sesión: ", error);
            alert("Error al iniciar sesión. Verifique sus credenciales.");
        }
    };

    return (
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form onSubmit={handleLogin}>
                        <h2 class="login-title">Login</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input 
                                type="email" 
                                name="email" 
                                onChange={handleChange} 
                                value={formData.email} 
                                required 
                            />
                            <label>Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" />
                            <input 
                                name="password" 
                                type="password" 
                                onChange={handleChange} 
                                value={formData.password} 
                                required 
                            />
                            <label>Password</label>
                        </div>
                        <div class="forget">
                            <label><input type="checkbox"/>Remember Me <a href="#">Forget Password</a></label>
                        </div>
                        <button class="boton-login" type="submit">Iniciar Sesión</button>
                        <div class="register">
                            <p>No eres miembro? <Link to='/register'>Regístrate ahora.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
