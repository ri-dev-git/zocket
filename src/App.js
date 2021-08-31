import Navbar from './components/navbar'
import Banner from './components/banner'
import TailorMadeServices from './components/tailorMadeServices'
import WhyUs from './components/whyUs.js'
import EarlyAcc from './components/earlyAcc'
import Footer from './components/footer'
import mail from "./components/icons/mail1.svg";
import Testimonial from "./components/testimonial";
import { useState } from "react";
import "./index.css"
import Axios from "axios"; 
import {BrowserRouter as Router} from 'react-router-dom'


const App =() => {
  const [email,setEmail]=useState("");
  const [emailEA,setEmailEA]=useState("");
  const [emailFoo,setEmailFoo]=useState("");
  
  const submitEmail1=( )=>{
    Axios.post("https://zocket-heroku.herokuapp.com/api/insert",{
      reg_mail:email
    }).then(()=>{
      alert("successful insert");
    });
  }
  const submitEmail2=()=>{
    Axios.post("https://zocket-heroku.herokuapp.com/api/insert",{
      reg_mail:emailEA
    }).then(()=>{
      alert("successful insert");
    });
  } 
  const submitEmail3=()=>{
    Axios.post("https://zocket-heroku.herokuapp.com/api/insert",{
      reg_mail:emailFoo
    }).then(()=>{
      alert("successful insert");
    });
    }
  const sendmail1=()=>{
    Axios.post("https://zocket-heroku.herokuapp.com/send",{
      reg_mailS:email
    }).then(()=>{
      alert("successful send");
    });
  }
  const sendmail2=()=>{
    Axios.post("https://zocket-heroku.herokuapp.com/send",{
      reg_mailS:emailEA
    }).then(()=>{
      alert("successful send");
    });
  }
  const sendmail3=()=>{
    Axios.post("https://zocket-heroku.herokuapp.com/send",{
      reg_mailS:emailFoo
    }).then(()=>{
      alert("successful send");
    });
  }

 /*  
 const filledEmail=(email,emailEA,emailFoo)=>{
    if(emailEA||emailFoo===""){
    const submitEmail=(email)=>{
      Axios.post("https://zocket-heroku.herokuapp.com/",{
            reg_mail:email
    }).then(()=>{
      alert("successful insert");
    });
    }
      return submitEmail;
    }
      else if(email||emailFoo===""){
        const submitEmail=(setEmailEA)=>{
          Axios.post("https://zocket-heroku.herokuapp.com/",{
            reg_mail:emailEA
          }).then(()=>{
            alert("successful insert");
          });
        } 
        return submitEmail;
      }
      else{
        const submitEmail=(emailFoo)=>{
          Axios.post("https://zocket-heroku.herokuapp.com/",{reg_mail:emailFoo}).then(()=>{
            alert("successful insert");
          });
          }
        return submitEmail;
      }
  }
  */

  return (
    <Router>
    <div className="App" id="home">
      <Navbar />
      <Banner/>    
      <TailorMadeServices/>
      <WhyUs/>
      <Testimonial/>
      <EarlyAcc/>
      <Footer/>
      
     <form>
      <input 
        className="email"
        value={email} 
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        placeholder="Your email address"
      />
      <button 
        type="submit"
        className="ban-button" 
        onClick={()=>{
          submitEmail1();sendmail1()
          }}>Get Early Access
      </button>
        <input 
          value={emailEA}
          placeholder="Your Email Address"  
          onChange={(e)=>{
            setEmailEA(e.target.value)
          }}
          className="eainput1"
        />
        <button 
          type="submit"
          className="Gea" 
          onClick={()=>{submitEmail2();sendmail2()}}>
            Get Early Access
        </button>
        <input 
          className="fmail"
          placeholder="Your Email Address"
          value={emailFoo}
          onChange={(e)=>
            {
            setEmailFoo(e.target.value)
          }
        }
        />
        <input 
          className="fsend"
          type="image"
          src={mail}
          alt="/"
          onClick={()=>{submitEmail3();sendmail3()}}/>
      </form>
    </div>
    </Router>

  );
}

export default App;
