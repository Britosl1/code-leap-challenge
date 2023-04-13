import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://dev.codeleap.co.uk/careers/";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
