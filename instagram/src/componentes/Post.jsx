// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Avatar } from "@mui/material";
import React from "react";
import styles from "../hoja-de-estilos/Post.module.css";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';


function Post({ user, postImage, likes, timestamp }) {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.post__header}>
          <div className={styles.post__headerAuthor}>
            {user} • <span>{timestamp}</span>
          </div>
        </div>
        <div className={styles.post__image}>
          <img src={postImage} alt="Post Image" />
        </div>
        <div>
          <div className={styles.post__footerIcons}>
            <div className={styles.post__iconsMain}>
              <FontAwesomeIcon icon={faHeart} className={styles.postIcon} />
              <FontAwesomeIcon icon={faMessage} className={styles.postIcon} />
              <FontAwesomeIcon icon={faPaperPlane} className={styles.postIcon} />
            </div>
            <div className={styles.post__iconSave}>
              <FontAwesomeIcon icon={faBookmark} className={styles.postIcon} />
            </div>
          </div>
          Liked by {likes} people.
        </div>
      </div>
    </div>
  );
}

export default Post;