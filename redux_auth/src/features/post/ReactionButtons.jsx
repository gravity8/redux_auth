import { useDispatch } from "react-redux";
import  {reactionAdded} from "./postSlice"

const reactionEmojis = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕️'
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();
  return (
    Object.entries(reactionEmojis).map(([name,emoji])=>
        <button 
        key={name}
        className="reactionButton" 
        onClick={()=>dispatch(reactionAdded([post.id,name]))}
        >{emoji} {post.reactions[name]}</button>
    )
  )
}

export default ReactionButtons