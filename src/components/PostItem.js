import './PostItem.css'
const PostItem =(props)=>{
    return(
        
            <div className='block'>
            <h5> {props.post.title}: {props.post.id}</h5>
          <div className="img">
          <img src={props.post.url}/>
          </div>
            </div>
        
    )

} 
export default PostItem