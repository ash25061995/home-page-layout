import React, { Component } from 'react';
import classes from './LiveVideos.css';
// import {myScript} from './carousel'

class LiveVideos extends Component{
 
    componentDidMount(){
      const script=document.createElement("script")
        script.async = true;
        script.type= "text/javascript"
        script.src = "https://gist.github.com/ash25061995/51c0f627ccee24cf47cc4c83d142106c.js"
        this.div.appendChild(script);
      const crslNextBtn = document.getElementsByClassName('LiveVideos__crslnext___bPEJ9');
        const crslPrevBtn = document.getElementsByClassName('LiveVideos__crslprev___1vHd2');
        const crslAllImgs = document.getElementsByClassName('LiveVideos__crslallimgctn___jnI9w')[0];
        const crslImgs = document.getElementsByClassName('LiveVideos__crslimg___Qwm9f');
        const crslImgsLength = document.getElementsByClassName('LiveVideos__crslimg___Qwm9f').length;
        let nextCount = 0;

        console.log('crslImgs',crslImgs)
        console.log('crslAllImgs',crslAllImgs)

        crslImgs[nextCount+1].style.transform = "scale(1.2)";

        function crslPrevImg() {
            nextCount -= 1;
            if (nextCount < -1) {
                nextCount = crslImgsLength - 2;
            }
            crslAllImgs.style.transform = `translateX(${nextCount*50*-1}vw)`;
            if (nextCount > -1) crslImgs[nextCount].style.transform = "scale(1)";
            crslImgs[nextCount+1].style.transform = "scale(1.2)";
            if (nextCount < crslImgsLength - 1) {
              if(crslImgs[nextCount + 2] && crslImgs[nextCount + 2].style){
                crslImgs[nextCount + 2].style.transform = "scale(1)";
              }
            }
        }
        function crslNextImg() {
            nextCount += 1;
            if (nextCount > crslImgsLength - 2) {
                nextCount = -1;
            }

            crslAllImgs.style.transform = `translateX(${nextCount*50*-1}vw)`;
            if (nextCount > -1) crslImgs[nextCount].style.transform = "scale(1)";
            crslImgs[nextCount+1].style.transform = "scale(1.2)";
            if (nextCount < crslImgsLength - 1) {
              if(crslImgs[nextCount + 2] && crslImgs[nextCount + 2].style){
                crslImgs[nextCount + 2].style.transform = "scale(1)"
              }
            }
        }
        crslPrevBtn[0].addEventListener('click', crslPrevImg);
        crslNextBtn[0].addEventListener('click', crslNextImg);

    }
    render(){

        return (

            <div>
    
                <div className={classes.LiveVideoText}><h1>Concept Videos</h1>
                <h2>select a number</h2></div>
    
            <div className={classes.crslctn} ref={el => (this.div = el)}>
       <div className={classes.crslallimgctn}>
         <div className={classes.crslimgctn}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.crslimg} />
         </div>
         <div className={classes.crslimgctn}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.crslimg} />
         </div>
         <div className={classes.crslimgctn}>
    
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.crslimg} />
         </div>
         <div className={classes.crslimgctn}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Pexels-photo-572937.jpg" alt="" className={classes.crslimg} />
         </div>
       </div>
       <div className={classes.crslcontrols}>
         <svg className={classes.crslprev} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={36} height={35} viewBox="0 0 36 35">
           <defs>
             <clipPath id="clip-Index_8">
               <rect width={36} height={35} />
             </clipPath>
           </defs>
           <g id="Index_8" data-name="Index – 8" clipPath="url(#clip-Index_8)">
             <rect width={36} height={35} fill="#fff" />
             <g id="Groupe_614" data-name="Groupe 614" transform="translate(-5817.75 -6010)">
               <rect id="Rectangle_228" data-name="Rectangle 228" width={36} height={35} transform="translate(5817.75 6010)" fill="#fa4616" />
               <path id="Tracé_1157" data-name="Tracé 1157" d="M0,0,8.86,8.86,0,17.72" transform="translate(5839.361 6036.632) rotate(180)" fill="none" stroke="#fff" strokeWidth={3} />
             </g>
           </g>
         </svg>
         <svg className={classes.crslnext} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={36} height={35} viewBox="0 0 36 35">
           <defs>
             <clipPath id="clip-Index_9">
               <rect width={36} height={35} />
             </clipPath>
           </defs>
           <g id="Index_9" data-name="Index – 9" clipPath="url(#clip-Index_9)">
             <rect width={36} height={35} fill="#fff" />
             <g id="Groupe_614" data-name="Groupe 614" transform="translate(-5817.75 -6010)">
               <rect id="Rectangle_228" data-name="Rectangle 228" width={36} height={35} transform="translate(5817.75 6010)" fill="#fa4616" />
               <path id="Tracé_1157" data-name="Tracé 1157" d="M0,0,8.86,8.86,0,17.72" transform="translate(5832.5 6018.912)" fill="none" stroke="#fff" strokeWidth={3} />
             </g>
           </g>
         </svg>
       </div>
     </div>
     </div>
   );
    }
}


export default LiveVideos;