const { fetchData } = require('../../src/features/omdbApiSlice');
const axios = require('axios');
const configureMockStore = require('redux-mock-store').default;
const thunk = require('redux-thunk');

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('omdbApiSlice', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchData', () => {
    it('should fetch movie details successfully and set the data in the store', async () => {
      const movieDetails = [
        {
          Poster: 'test_poster_url',
          Title: 'test_title',
          Type: 'test_type',
          Year: 'test_year',
          imdbID: 'test_imdb_id',
        },
      ];
      const responseData = {
        Response: 'True',
        Search: movieDetails,
        totalResults: '1',
      };

      const expectedActions = [
        { type: fetchData.pending.type },
        { type: fetchData.fulfilled.type, payload: responseData },
      ];

      axios.get.mockResolvedValueOnce({
        data: responseData,
      });

      const store = mockStore({ omdbApi: { data: null, loading: false, error: null } });

      await store.dispatch(fetchData({ inputQuery: 'test_query' }));

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should set the error in the store when fetching movie details fails', async () => {
      const errorMessage = 'test_error_message';

      axios.get.mockRejectedValueOnce({
        message: errorMessage,
      });

      const store = mockStore({ omdbApi: { data: null, loading: false, error: null } });

      await store.dispatch(fetchData({ inputQuery: 'test_query' }));

      expect(store.getActions()[1]).toEqual({
        type: fetchData.rejected.type,
        error: {
          message: errorMessage,
        },
      });
    });
  });
});

export {};