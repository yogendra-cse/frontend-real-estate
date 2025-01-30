import './profile.scss';
import List from '../list/list';
import Chat from '../../components/chat/chat';
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from 'react-router';
const Profile = ()=>{
  
  const navigate = useNavigate()
  const handleLogout = async (e) =>{
    e.preventDefault()
    try{
      const res = apiRequest.post("/auth/logout")
      localStorage.removeItem("user")
      navigate("/")//homepage
    }catch(err){

    }
  }
    return(
        <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="/avatar_profile.jpeg"
                alt=""
              />
            </span>
            <span>
              Username: <b>Yogendra</b>
            </span>
            <span>
              E-mail: <b>yogendra25@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
            <Chat />
        </div>
      </div>
    </div>
    )
}
export default Profile;