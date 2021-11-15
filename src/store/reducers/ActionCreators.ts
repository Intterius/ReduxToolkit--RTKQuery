import { IUser } from './../../models/IUser';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   const { usersFetching, usersFetchingSuccess, usersFetchingError } =
//     userSlice.actions;
//   try {
//     dispatch(usersFetching());
//     const { data } = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     dispatch(usersFetchingSuccess(data));
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       dispatch(usersFetchingError(error.message));
//     }
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
