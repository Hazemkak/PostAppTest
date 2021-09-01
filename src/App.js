import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

import {getPosts,savePost} from './api/getPostsService.jsx';
import {Post} from './components/postView.jsx';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


function App() {
  const classes=useStyles();
  const [content,setContent]=useState();
  const [posts,setPosts]=useState([]);
  const [id,setId]=useState(0);
  const [viewMode,setViewMode]=useState(0);

  let handelTyping=(event)=>{
    setContent(event.target.value);
  }

  let handlePosting=()=>{
    // let newTemp=posts;
    // newTemp.push({
    //   id:id,
    //   body:content,
    //   time:new Date().toDateString(),
    // });
    // let newId=id;
    // newId+=1;
    // setId(newId);
    // setPosts(newTemp);
    let packet={
      _token: "{{ csrf_token() }}",
      title:"Hello",
      body:content
    };
    savePost(packet)
    .then(
      response => alert(JSON.stringify(response.data))
      
      )
  .catch(error => {
      console.log("ERROR:: ",error.response.data);
      
      });
  }

  let viewPost=(event)=>{
    const postId=event.target.id;
  }


  let getThePosts=()=>{
    //console.log("here");
    getPosts()
    .then((data)=>{
      //console.log(data['data']);
      setPosts(data['data']);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  let change=(event)=>{
    if(viewMode){
      setViewMode(0);
    }else{
      setViewMode(event.target.id);
    }
    
  }
  

  return (
    <div onLoad={getThePosts()} className="App">
      <Grid container spacing={0}>
      <Grid item xs={1}>
        </Grid>
        <Grid item xs={8}>
        <TextField onChange={handelTyping} fullWidth id="filled-basic" label="Filled" variant="filled" />
        </Grid>
        <Grid item xs={3}>
        <Button onClick={handlePosting} variant="contained" color="primary">
        Post
      </Button>
        </Grid>
      </Grid>
      <br/>
      <hr/>
      <br/>
      
      {!viewMode && posts.map(post=>{
        return(
          <Post onClickFunc={change} viewMode={viewMode} key={post.id} id={post.id} title={post.title} body={post.body}/>
        )
      })}
      {viewMode && posts.map(post=>{
        if(post.id==viewMode){
          return(
            <div>
              <Post onClickFunc={change} key={post.id} id={post.id} title={post.title} body={post.body}/>
              <button onClick={change}>Back</button>
            </div>

            
          )
        }
      })}
    </div>
  );
}

export default App;
