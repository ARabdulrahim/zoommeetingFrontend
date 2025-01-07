import React, { useContext, useState } from 'react'
import withAuth from '../utils/WithAuth'
import { useNavigate } from 'react-router-dom'
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';


function Home() {

  let navigate=useNavigate();

  const [meetingCode, setMeetingCode]=useState("");

  const{addToUserHistory}=useContext(AuthContext);
  let handleJoinVideoCall=async()=>{
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`)
  } 

  return (
    <>
    <div className="navBar">
      <div style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
        <h2 onClick={()=> navigate("/creteMeeting")}>CreateMeeting</h2>
      </div>
    <div style={{display:"flex", alignItems:"center"}}>
      <IconButton onClick={()=> navigate("/history")}>
          <RestoreIcon/>   
      </IconButton >
      <p>History</p>
      <Button onClick={()=>{ localStorage.removeItem("token");  navigate("/auth")}} >
        Logout
      </Button>
    </div>
    </div>

    <div className="meetContainer">
      <div className="leftPanel">
       <div>
       <h2>Providing Quality Video Call Just Like Quality Education</h2>
        <div style={{display: "flex", gap: "10px"}}>
          <TextField onChange={(e) => setMeetingCode(e.target.value)} label="Meeting Code" id='outLined'></TextField>
          <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
        </div>
       </div>
      </div>

      <div className="rightPanel">
        <img srcSet="/src/assets/logo3.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default withAuth(Home)