import React, { useEffect } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import "./Razvan.css";


export const Razvan = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [license, setLicense] = React.useState("");

    function changeUsername(event) {

        setUsername(event.target.value);
    }
    
    function changeEmail(event) {

        setEmail(event.target.value);
    }
    function changePassword(event) {
        setPassword(event.target.value);
    }
    function changeLicense(event) {
        setLicense(event.target.value);
    }
    function passVer(ev1) {
        setRePassword(ev1.target.value);
        
    }

    function submit(event) {
        
        if (rePassword === password) {
            // axios.post("http://192.168.35.185:8080/User/GetLicense",
            // {
            //     key: license
            // }
            // ).then((response) => {
                // const { data, status } = response;
                // if (status === 200) {
                    axios.post("http://192.168.35.185:8080/User/InsertData",
                        {
                            username: username,
                            email: email,
                            password: password
                        }
                    ).then((response) => {
                        const {data, status} = response;
                        console.log(response);
                    })
                    // }
                // else {
                // console.log("N am primit pachetX2");
            // }
            // }).catch((error) => {
            // });
            
        } else {
            console.log("false")
        }
    }

    // useEffect(() => {
    //     axios.get("http://192.168.35.185:8080/User/GetLicense",
    //     {
    //       key: license,
    //     }
    //   ).then((response) => {
    //     const { data, status } = response;
    //     if (status === 200) {
    //       console.log("AM PRIMIT PACHETx22222");
    //     }
    //     else {
    //         console.log("N am primit pachetX2");
    //     }
    //   }).catch((error) => {
    //   });
    // }, [license])

    useEffect(() => {
        if(rePassword !== password)
            setPasswordError(true);
        else{
            setPasswordError(false);
        }
    }, [rePassword])


    return <>
    
        <div className="registr">
            <span>Register</span>
            <form>
                <label ><b>Username</b></label>
                <TextField className="textfield" type="text" placeholder="Username" name="firstName" id="firstName" onChange={changeUsername} required></TextField>

                <label><b>Email</b></label>
                <TextField className="textfield" type="text" placeholder="Email" name="email" id="email" onChange={changeEmail} required></TextField>

                <label ><b>Password</b></label>
                <TextField className="textfield" type="password" placeholder="Password" name="password" id="password" onChange={changePassword} required></TextField>
                
                <label ><b>Repeat Password</b></label>
                <TextField error={passwordError} helperText={passwordError ? "Passwords don't match" : null}  className="textfield" type="password" placeholder="Repeat Password" name="repeatPassword" id="repeatPassword" onChange={passVer} required></TextField>
{/* 
                <label ><b>Insert Lincese</b></label> */}
                <TextField className="textfield" type="password" placeholder="License" name="license" id="license" onChange={changeLicense} required></TextField>

                {
                    passwordError ? 
                                    <button disabled type="submit" className="registerbtn" onClick={submit}>Register</button>
                                  :
                                    <button type="submit" className="registerbtn" onClick={submit}>Register</button>
                }
            </form>

        </div>
    </>

}