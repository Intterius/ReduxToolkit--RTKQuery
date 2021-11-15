import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import './App.css';
import PostContainer from './components/PostContainer';

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className='App'>
      {/* {isLoading && <h1>Loading users...</h1>}
      {error && <h1>{error}</h1>}

      {users.length ? JSON.stringify(users) : ''} */}
      <PostContainer />
    </div>
  );
}

export default App;
