import {Products} from "../data/Products";


function Video(props){
    const src=props.Vid;
  return (
    <video controls width="100%">
      <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
    </video>
    
  );
};

export default Video;