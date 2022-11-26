import React, { useState} from 'react';
import './Style.css'
function MyFormValidate() {
    const[username,setUserName]=useState('');
    const[nameError,setNameError]=useState('');
    const[nameColor,setNameColor]=useState('')
    const[email,setEmail]=useState('');
    const[emailError,setEmailError]=useState('');
    const[emailColor,setEmailColor]=useState('')
    const[pass,setPass]=useState('');
    const[passError,setPassError]=useState('');
    const[Colors,setColor]=useState('')
    const[sign,setSign]=useState('');
    const[flag,setFlag]=useState(0);
    const UserValidate=()=>{
        const reg=new RegExp("[0-9!@#$%^&*()]")
        setNameError("")
        if(username.length===0){
            setNameError("Username is Required")
            setNameColor('red')
        }
        else if(reg.test(username)){
            setNameError("Username should not contain any special characters")
            setNameColor('red')
        }
        else{
            setNameColor('black')
        }
        if(nameError.length===0){
            setFlag(flag+1);
            console.log(flag)

        }
        if(flag==3){
            setSign("SuccessFully signed In")
        }

    }
    const EmailValidate=()=>{
        const eReg=new RegExp("[@]")
        setEmailError("")
        if(email.length==0){
            setEmailError("Email ID is required")
            setEmailColor("red");
        }
        else if(!eReg.test(email)){
            setEmailError("Invalid Email-@")
            setEmailColor("red");
        }
        else{
            setEmailColor('black')
        }
        if(emailError.length===0){
            setFlag(flag+1);
            console.log(flag)

        }
        if(flag==3){
            setSign("SuccessFully signed In")
        }

    }
    const PassValidate=()=>{
        const CapReg=new RegExp("[ASDFGHJKLQWERTYUIOPZXCVBNM]")
        const NoReg=new RegExp("[1-9]")
        const SpReg=new RegExp("[~!@#$%^&*()]")
        const SmReg=new RegExp("[asdfghjklqwertyuiopzxcvbnm]")
        let sum=0;
        setPassError("")
        if(pass.length===0){
            setPassError("Password is Required")
            setColor("red")
        }
        if(SmReg.test(pass)){
            sum=sum+1;
        }
        if(CapReg.test(pass)){
            sum=sum+1;
        }
        if(NoReg.test(pass)){
            sum=sum+1;
        }
        if(SpReg.test(pass)){
            sum=sum+1;
        }
        if(sum===1){
            setPassError("Password is weak");
            setColor("red")
        }
        if(sum===2){
            setPassError("Password is Good ");
            setColor("orange")
        }
        if(sum===3){
            setPassError("Password is Strong");
            setColor("lightgreen")
        }
        if(sum===4){
            setPassError("Password is Very Strong");
            setColor("blue")
            setFlag(flag+1);
            console.log(flag)
        }
        if(flag==3){
            setSign("SuccessFully signed In")
        }



        

    }
  
    
    
    return ( 
        <>
        <div className='container' id='don'>
            <h1 >Form Validation</h1>
            <h2 style={{color:'lightgreen'}} >{sign}</h2>
            <div className='row' style={{marginTop:30}}>
                <input type="text" placeholder="Enter your Name" id="username" value={username} style={{borderColor:nameColor}} onPointerLeave={UserValidate} onChange={e=>{setUserName(e.target.value)}}></input>
            </div>
            <p style={{color:'red',textAlign:'left'}}>{nameError}</p>
            <div className='row' style={{marginTop:30}}>
                <input type="email" placeholder="Enter your Email" id="email" value={email} onPointerLeave={EmailValidate} style={{borderColor:emailColor}}  onChange={e=>{setEmail(e.target.value)}}></input>
            </div>
            <p style={{color:'red',textAlign:'left'}}>{emailError}</p>
            <div className='row' style={{marginTop:30}}>
                <input type="password" placeholder="Enter your password" id="password" style={{borderColor:Colors}} value={pass} onPointerLeave={PassValidate} onChange={e=>{setPass(e.target.value)}}></input>
            </div>
            <p style={{color:Colors,textAlign:'left'}}>{passError}</p>
         
           
        </div>
        </>
     );
}

export default MyFormValidate;