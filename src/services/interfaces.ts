export interface UserPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface NewUserPost {
  username?: string | null;
  title?: string | undefined;
  content?: string | undefined;
}

//content for later studies:

// const url = "https://dev.codeleap.co.uk/careers/";

// export const createPostApi = async (user: NewUserPost): Promise<UserPost> => {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });
//   const data = await response.json();
//   return data;
// };

// export const getPosts = async (): Promise<UserPost[]> => {
//   const response = await fetch(url, { method: "GET" });
//   const data = await response.json();
//   return data.results;
// };

// export const getUniquePost = async (id: number): Promise<UserPost> => {
//   const response = await fetch(`${url}/${id}/`, { method: "GET" });
//   const data = await response.json();
//   return data;
// };

// export const deleteUniquePost = async (id: number): Promise<UserPost> => {
//   const response = await fetch(`${url}/${id}/`, { method: "DELETE" });
//   const data = await response.json();
//   return data;
// };
