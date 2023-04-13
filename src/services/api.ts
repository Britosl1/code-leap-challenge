import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserPost } from "./posts";

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
    getUniquePost: builder.query({
      query: (postId: number) => ({
        url: `/${postId}/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetUniquePostQuery } = postApi;
