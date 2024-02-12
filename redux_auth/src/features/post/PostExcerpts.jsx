import PostAuthors from "./PostAuthors";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExcerpts = ({ post }) => {
  console.log(post)
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthors userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <div className="reactionButtons">
        <ReactionButtons post={post} />
      </div>
    </article>
  );
};


export default PostExcerpts