import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


function History() {

    const {getHistoryOfUser, delteUserHistory}=useContext(AuthContext);
    const[meetings, setMeetings]=useState([]);

    const routeTo=useNavigate();

    const fetchHistory=async()=>{
      try{
          const history=await getHistoryOfUser();
          setMeetings(history.data.meeting);
      }catch(e){
          console.log(e);
      }
  }
    useEffect(()=>{
        fetchHistory();
    });
    
    let formateDate=(dateString)=>{
        const date=new Date(dateString);
        const day=date.getDate().toString().padStart(2, "0");
        const month=(date.getMonth()+1).toString().padStart(2,"0");
        const year=date.getFullYear();

        return `${day}/${month}/${year}`
    }
  return (
    <div>
        <IconButton onClick={()=> routeTo("/home")}>
               <HomeIcon/>
            </IconButton>
     { meetings.length !== 0 ? meetings.map((el, index)=>{
        return(
            <>
             <Card key={index} variant="outlined">
             <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
               Code: {el.meetingCode}
             </Typography>
           <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Date: {formateDate(el.date)}</Typography>
             </CardContent>
             <CardActions>
           <Button onClick={()=> delteUserHistory(el._id)} size="small">Delete</Button>
           </CardActions>
             </Card>
            </>
        )
     }): <></>}
    </div>
  )
}

export default History
