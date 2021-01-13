/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React from 'react';
import { useHistory } from 'react-router-dom';

//terkait routing (buka comment Link jika perlu <Link />)
//import { Link } from 'react-router-dom'
import { login } from '../../../utils/xhr'

import './Login-Container.css';

/************************ Deklarasi kelas/komponen ***************************/
var LoginContainer = () => {
    /************************ Deklarasi objek/variabel ***************************/
    const RightUsername = "admin";
    const RightPassword = "labindi";
    
    var history = useHistory();

    var loginHandler = (e) => {
        e.preventDefault();
        login().then(() => {
            if(document.getElementById("username").value === RightUsername && document.getElementById("password").value === RightPassword){
              history.push('/app')
            }
            else{
                alert("Username atau Password salah!");
            }
        });
    };

    return(
        <section className="background"/** */>
            <section /**AC Image */>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2935/2935054.svg" alt="Logo AC Login Page" className="image-ac-login"></img>
            </section>
            <section /**Text Monitoring AC Lab Indi */>
                <h1 className="text-login-header-1"> AC Monitoring System</h1>
                <h1 className="text-login-header-2"> Laboratorium Instumentasi Industri ITB</h1>
            </section>
            <section>
                <h2 className="header-form">Username</h2>
            </section>
            <section /**Kolom isian username */>
                <form>
                    <input type="text" id="username" name="admin" placeholder="admin" className="form-username"></input>
                </form>
            </section>
            <section>
                <h2 className="header-form">Password</h2>
            </section>
            <section /**Kolom isian password */>
                <form>
                    <input type="password" id="password" name="password" className="form-username"></input>
                </form>
            </section>
            <br/>
            <br/>
            <section /**Tombol Submit */>
                <form>
                    <button onClick={loginHandler} className="form-submit">Submit</button>
                </form>
            </section>
            <br/>
            <br/>
        </section>
    )
}


export default LoginContainer;