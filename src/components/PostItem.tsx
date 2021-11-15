import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({
  post,
  remove,
  update,
}): JSX.Element => {
  const handlePostDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdatePost = (event: React.MouseEvent) => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div className='post' onClick={handleUpdatePost}>
      <p>{post.title}</p>
      <button onClick={handlePostDelete}>Delete</button>
    </div>
  );
};

export default PostItem;
