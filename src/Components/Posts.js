import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { database } from "../firebase";
import Avatar from "@mui/material/Avatar";
import Like from "./Like";
import Video from "./Video.js";
import "./Posts.css";
import CircularProgress from "@mui/material/CircularProgress";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Like2 from "./Like2";
import AddComment from "./AddComment";
import Comments from "./Comments";

function Posts(props) {
  const [posts, setPosts] = useState(null);
  const [open, setOpen] = useState(null);

  const handleClickOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(null);
  };
  useEffect(() => {
    let parr = [];
    const unsub = database.posts
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        parr = [];
        querySnapshot.forEach((doc) => {
          let data = { ...doc.data(), postId: doc.id };
          parr.push(data);
        });
        setPosts(parr);
      });
    return unsub;
  }, []);

  return (
    <div>
      {posts == null || props.userData == null ? (
        <CircularProgress />
      ) : (
        <div className="video-container">
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <div className="videos">
                <Video src={post.pUrl} id={post.pId} />
                <div className="fa" style={{ display: "flex" }}>
                  <Avatar src={post.uProfile} />
                  <h4>{post.uName}</h4>
                </div>
                <Like userData={props.userData} postData={post} />
                <ChatBubbleIcon
                  className="chat-styling"
                  onClick={() => handleClickOpen(post.pId)}
                />
                <Dialog
                  open={open == post.pId}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  fullWidth={true}
                  maxWidth="md"
                >
                  <div className="modal-container">
                    <div className="video-modal">
                      <video autoPlay={true} muted="muted" controls>
                        <source src={post.pUrl} />
                      </video>
                    </div>
                    <div className="comment-modal">
                      <Card className="card1" style={{ padding: "1rem" }}>
                        <Comments postData={post} />
                      </Card>
                      <Card variant="outlined" className="card2">
                        <Typography style={{ padding: "0.4rem" }}>
                          {post.likes.length == 0
                            ? "Liked by nobody"
                            : `Liked by ${post.likes.length} users`}
                        </Typography>
                        <div style={{ display: "flex" }}>
                          <Like2
                            postData={post}
                            userData={props.userData}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          <AddComment
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            userData={props.userData}
                            postData={post}
                          />
                        </div>
                      </Card>
                    </div>
                  </div>
                </Dialog>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
export default Posts;
