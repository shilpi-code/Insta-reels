import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import Avatar from '@mui/material/Avatar';
import Like from './Like'
import Video from './Video.js';
import './Posts.css'
import CircularProgress from "@mui/material/CircularProgress";

function Posts(props) {
  const [posts, setPosts] = useState(null);
  useEffect(()=>{
     let parr=[]
      const unsub=database.posts.orderBy('createdAt','desc').onSnapshot((querySnapshot)=>{
          parr=[]
          querySnapshot.forEach((doc)=>{
              let data= {...doc.data(),postId:doc.id}
              parr.push(data);
          })
          setPosts(parr)
      })
      return unsub;
  },[])

  return (
    <div>
      {posts == null || props.userData == null ? <CircularProgress /> :
      <div className="video-container">
      {
          posts.map((post,index)=>(
              <React.Fragment key={index}>
                  {console.log(post)}
                  <div className="videos">
                      <Video src={post.pUrl} id={post.pId}/>
                      <div className="fa" style={{display:'flex'}}>
                                        <Avatar src={post.uProfile} />
                                        <h4>{post.uName}</h4>
                       </div>
                       <Like userData={props.userData} postData={post}/>
                  </div>
              </React.Fragment>
          ))
      }
  </div>
}
    </div>
  );
}
export default Posts;
