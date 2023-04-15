import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserPost } from "./interfaces";

const url = "https://dev.codeleap.co.uk/careers/";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  //https://redux.js.org/tutorials/essentials/part-5-async-logic
  //https://www.youtube.com/watch?v=SKyEUS4heS0&ab_channel=GeekyShows
  //https://wanago.io/2021/12/27/redux-toolkit-query-typescript/

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
    createPost: builder.mutation({
      query: (post: Partial<UserPost>) => ({
        url: "",
        method: "POST",
        body: post,
      }),
    }),
    updateUniquePost: builder.mutation<
      UserPost,
      { postId: number; post: Partial<UserPost> }
    >({
      query: ({ postId, post }) => ({
        url: `/${postId}/`,
        method: "PATCH",
        body: post,
      }),
    }),
    deleteUniquePost: builder.query({
      query: (postId: number) => ({
        url: `/${postId}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUniquePostQuery,
  useDeleteUniquePostQuery,
  useCreatePostMutation,
  useUpdateUniquePostMutation,
} = postApi;
