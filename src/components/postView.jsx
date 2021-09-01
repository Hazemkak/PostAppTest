import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    postStyle:{
      padding:'1%',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      backgroundColor:'white',
      overflow:'hidden',
      marginBottom:'2%',
      borderRadius:'20px',
      cursor:'pointer'
    },
    bodyStyle:{
      textAlign:'left'
    },
    titleStyle:{
      fontWeight:'bolder',
    }
  }));


export function Post(props){
    const classes=useStyles();

    return <div onClick={props.onClickFunc} id={props.id} className={classes.postStyle}>
        <h4 className={classes.titleStyle}>{props.title}</h4> 
        <p className={classes.bodyStyle}>{props.body}</p>
    </div>
    
    
}