import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [answer,setAnswer] = useState("");
    const [newPassword,setNewPassword] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault() // to prevent deafault behavior of refershing on form submit/login
        try {
            const res = await axios.post('/api/v1/auth/forgot-password',{email,newPassword,answer});
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                navigate('/login');  // moves/redirects to login page
            }
              else{
                toast.error(res.data.message)
              }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
      }


  return (
  <Layout title={'Forgot Password - Ecommerce App'}>
 <div className='register'>
    <form onSubmit={handleSubmit}>
    <h1>RESET PASSWORD</h1>
    
      <div className="mb-3">
      <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' required/>
      </div>
      <div className="mb-3">
      <input type="text" value={answer} onChange={(e)=> setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Best Friend Name' required/>
      </div>
       <div className="mb-3">
       <input type="password" value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Your New Password' required/>
       </div>     
       
       
       <button type="submit" className="btn btn-primary">RESET</button>
    </form>
    </div> 
     </Layout>
)
}

export default ForgotPassword