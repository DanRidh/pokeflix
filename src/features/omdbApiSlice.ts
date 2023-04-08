import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

interface ApiData {
  Response: string,
  Search: MovieDetails[],
  totalResults: string,
  Error?: string
}

export interface MovieDetails {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}

interface ApiState {
  data: ApiData | null;
  loading: boolean;
  error: string | null;
}

interface FetchDataParams {
  inputQuery: string | undefined;
}

const initialState: ApiState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('omdbApi/fetchData', async (params: FetchDataParams) => {
  const response: AxiosResponse<ApiData> = await axios.get(`${process.env.REACT_APP_OMDB_API_URL}?s=${params.inputQuery}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
  return response.data;
});

const omdbApiSlice = createSlice({
  name: 'omdbApi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default omdbApiSlice.reducer;