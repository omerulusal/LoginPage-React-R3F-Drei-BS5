import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaTwitter, FaMailBulk } from "react-icons/fa";
import { Canvas } from '@react-three/fiber';
import { Cloud, MeshDistortMaterial, Sky } from '@react-three/drei';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";

const LoginPage = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handlebtn = () => {
        if (user.length < 6 || user.length == null) {
            toast.error("Lütfen en az altı karakter giriniz.");
            if (password.length < 8) {
                toast.error("Lütfen şifreye en az 8 karakter giriniz.")
            }
        } else {
            toast.success("Başarıyla giriş yapıldı.");
        }
    }
    const handleuser = (e) => {
        setUser(e.target.value)
    }
    const handlepass = (e) => {
        setPassword(e.target.value)
    }
    console.log(user, password, "datataaa")



    {/* ==============================>Link Pencereleri<============================== */ }
    const openWindow = () => {
        window.open('https://accounts.google.com/v3/signin/identifier?dsh=S-1207173959%3A1680356920812141&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7RMQG8JlkF5tyn_wtqN5H98yPBoNVvhzYqQ6vSaN9-j1ssyX0dt-29yj_89r82q1CINd_Hi6Q&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin', 'Yeni pencere', 'width=600, height=400');
    }
    const openWindow2 = () => {
        window.open('https://github.com/login', 'Yeni pencere', 'width=600, height=400');
    }
    const openWindow3 = () => {
        window.open('https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidHIifQ%3D%3D%22%7D', 'Yeni pencere', 'width=600, height=400');
    }
    const openWindow4 = () => {
        window.open('https://accounts.google.com/v3/signin/identifier?dsh=S-1207173959%3A1680356920812141&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7RMQG8JlkF5tyn_wtqN5H98yPBoNVvhzYqQ6vSaN9-j1ssyX0dt-29yj_89r82q1CINd_Hi6Q&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin', 'Yeni pencere', 'width=600, height=400');
    }


    return (
        <>
            <div className="canvas-container">
                <Canvas style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: -1 }}>
                    <Sky sunPosition={2} />
                    <Cloud speed={.2} color='#F94A29' opacity={.5} />
                    <spotLight />
                    <directionalLight />
                    <ambientLight />
                    <mesh scale={2} position={[0, 0, -5]} >
                        <circleBufferGeometry args={[1, 100, 1, 90]} />
                        <MeshDistortMaterial color={"#FFD495"} distort={0.4} speed={1.8} />
                    </mesh>
                </Canvas>
            </div>
            <form action="">
                <div className="form-group mt-3 w-75 m-auto" id='form-div'>
                    <h2 className='text-center mt-5 m-auto'>Login</h2>



                    {/* ==============================>Giris<============================== */}
                    <label htmlFor="user" className='form-label lead' id='label-user'>Username:</label>
                    <input type="text" id='user' value={user} onChange={handleuser} className="form-control w-25 d-inline user" placeholder="Enter your username!" />
                    <div className="password">
                        <label htmlFor="pass" className='form-label lead' id='label-pass'>Password:</label>
                        <input type="password" id='pass' onChange={handlepass} className="form-control w-25 d-inline password" placeholder="Enter your password!" />
                    </div>


                    <div className="check">
                        <input type="checkbox" className='form-check-input' id="check" />
                        <label htmlFor="check" className='form-check-label ms-2' id='label'>Remember Me</label>
                    </div>


                    <button type='submit' className='btn m-auto btn-dark' onClick={handlebtn}>Login</button>



                    {/* ==============================>Linkler<============================== */}
                    <div className="log-alternative mt-3 w-75 m-auto">
                        <ul className='list-group-item d-flex justify-content-center align-items-center bg-transparent '>
                            <li className='list-group-item list-inline-item w-25 bg-transparent border-none'>
                                <a href="#" className='text-decoration-none link-dark' onClick={openWindow} >Contiune with Google <FaGoogle color='gold' /> </a>
                            </li>
                            <li className='list-group-item list-inline-item w-25 bg-transparent border-none'>
                                <a href="#" className='text-decoration-none link-dark' onClick={openWindow2} >Contiune with Github <FaGithub /> </a>
                            </li>
                            <li className='list-group-item list-inline-item w-25 bg-transparent border-none'>
                                <a href="#" className='text-decoration-none link-dark' onClick={openWindow3} >Contiune with Twitter <FaTwitter color='blue' /> </a>
                            </li>
                            <li className='list-group-item list-inline-item w-25 bg-transparent border-none'>
                                <a href="#" className='text-decoration-none link-dark' onClick={openWindow4} >Contiune with Email <FaMailBulk color='red' /> </a>
                            </li>
                        </ul>
                    </div>
                    <a className='d-flex justify-content-center align-items-center text-decoration-none link-dark' id='acco' href="#">Create Account</a>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}
export default LoginPage