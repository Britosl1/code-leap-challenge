import { NewUserPost, UserPost } from "./../services/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserPostSlice {
  posts: UserPost[];
  newPost: NewUserPost;
}

// the code bellow will be used for later studies !!

const initialState: UserPostSlice = {
  posts: [],
  newPost: {
    content: "",
    title: "",
    username: "",
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost(state, action: PayloadAction<any>) {
      state.posts.push(action.payload);
    },
    removePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost(state, action: PayloadAction<UserPost>) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
  },
});

export const { createPost, removePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
