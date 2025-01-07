import React, { useState } from 'react'
import withAuth from '../utils/WithAuth'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PasswordIcon from '@mui/icons-material/Password';

function CreateMeeting() {
    const[toggle, setToggle]=useState(false);
    const[date, setDate]=useState();
    const[time,setTime]=useState();
    const[meetingCode, setMeetingCode]=useState();
 
    let data={
      "date": date,
      "time": time,
      "meetingCode": meetingCode,
      "meetingLink": `${window.location.host}`
   }

   let getData=()=>{
    return `Meeting Schedule \ndate: ${date} \ntime: ${time} \nmeetingCode: ${meetingCode} \nmeetingLink: ${window.location.host}`
 }
    const shareOnWhatsApp = () => {
      const message=getData();
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };

    const shareOnFacebook = () => {
      const message=getData();
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(message)}`;
      window.open(facebookUrl, '_blank');
    };

    const shareOnLinkdin = () => {
      const message=getData();
      const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(message)}`;
      window.open(linkedinUrl, '_blank');
    };

    const shareOnTwitter = () => {
      const message=getData();
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
      window.open(twitterUrl, '_blank');
    };

    
 let handleSubmit=(e)=>{
    e.preventDefault();
    setToggle(!toggle);
 }

  return (
    <>
    <div className='createMeetingContainer'>
    <Card className='createMeeting' sx={{ maxWidth: 345 }}>
      <h2>Create Meeting</h2>
        <div style={{paddingBottom:"20px", marginTop:"15px", display:"flex"}}>
           <CalendarMonthIcon style={{height:"45px", width:"40px"}}/>
            <TextField label="____________Date" type='date' id='date' fullWidth value={date} onChange={(e)=> setDate(e.target.value)}/>
        </div>
        <div style={{paddingBottom:"20px", display:"flex"}}>
            <AccessAlarmIcon style={{height:"45px", width:"40px"}}/>
            <TextField label="HH:MM AM/PM"  id="time" fullWidth value={time} onChange={(e)=> setTime(e.target.value)}/>
        </div>
        <div style={{paddingBottom:"20px", display:"flex"}}>
           <PasswordIcon style={{height:"45px", width:"40px"}}/>
            <TextField  label="Meeting Code" type="number" id='mtCode' fullWidth value={meetingCode} onChange={(e)=> setMeetingCode(e.target.value)}/>
        </div>
        <Button variant="contained" onClick={handleSubmit}>Generate Meeting</Button>
      </Card>
      
    </div>
    <div>
   { toggle ? 
    <div className='scheduleCard'>
      <Card  sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Meeting Schedule"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Date : {data.date}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Time : {data.time}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Meeting Code : {data.meetingCode}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Meeting Link : {data.meetingLink}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={shareOnWhatsApp} aria-label="share">
          <WhatsAppIcon/>
        </IconButton>
        <IconButton onClick={shareOnFacebook} aria-label="share">
        <FacebookIcon/>
        </IconButton>
        <IconButton onClick={shareOnLinkdin} aria-label="share">
          <LinkedInIcon/>
        </IconButton>
        <IconButton onClick={shareOnTwitter} aria-label="share">
          <TwitterIcon/>
        </IconButton>
      </CardActions>
    </Card>
    </div>
    :""}
    
    </div>
    </>
  )
}

export default withAuth(CreateMeeting)
