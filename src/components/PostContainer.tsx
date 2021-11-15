import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer: React.FC = (): JSX.Element => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handlePostCreate = async () => {
    const title = prompt();
    const randomId = Math.random() * 100000000000;

    await createPost({ title, body: title, id: randomId } as IPost);
  };

  const handlePostRemove = (post: IPost) => {
    deletePost(post);
  };

  const handlePostUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div className='post__list'>
      <button onClick={handlePostCreate}>Create a new Post</button>

      {isLoading && <h1>Loading your posts...</h1>}
      {error && <p>{'An unexpected error occured during the data fetching'}</p>}
      {posts?.map((post) => {
        return (
          <PostItem
            key={post.id}
            post={post}
            remove={handlePostRemove}
            update={handlePostUpdate}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
