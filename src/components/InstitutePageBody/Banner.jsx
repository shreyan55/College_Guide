import React from "react"
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Banner=()=>
{
    return(
        <>
        
        <div className="h-96 justify-between flex"
        style={{  
            backgroundImage: 'url("https://images.shiksha.com/mediadata/images/1644999781phpt1NkiQ_1280x960.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >

<div className="flex items-end self-end p-4">
            <img src="https://images.shiksha.com/mediadata/images/1610020889phptpg893.jpeg" alt="Logo" width="100" height="100" />
            <span className="font-bold text-white text-4xl mx-2 px-2 " style={{backgroundColor :"rgba(199, 199, 199, 0.5)"}}>Visvesvaraya Technological University</span>
            </div>
            <div className=" flex items-start justify-end self-start justify-self-end ">
            <button type="button" className="btn lik btn-link" style={{backgroundColor :"rgba(199, 199, 199, 0.5)",margin :"2px"}}><span><FavoriteBorderIcon /></span></button>    
            <button type="button" className="btn lik btn-link" style={{backgroundColor :"rgba(199, 199, 199, 0.5)",margin :"2px"}}><span><ShareIcon /></span></button>
            </div>
            


        </div>
        </>
    )
}
export default Banner;