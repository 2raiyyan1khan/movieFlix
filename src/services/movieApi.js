import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://omdbapi.com";
// "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search";
//omdbapi.com/?apikey=ba832875&type=series&s=avengers
// const createRequest = (url) => ({ url, headers: headers });

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMovie: builder.mutation({
      query: (query) => ({
        method: "GET",
        url: "/?apikey=ba832875",
        params: { s: query },
      }),
    }),
    getMovieById: builder.mutation({
      query: (query) => ({
        method: "GET",
        url: "/?apikey=ba832875&plot=full",
        params: { i: query },
      }),
    }),
  }),
});

export const { useGetMovieMutation, useGetMovieByIdMutation } = movieApi;
