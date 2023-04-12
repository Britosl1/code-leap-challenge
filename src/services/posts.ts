const url = "https://dev.codeleap.co.uk/careers/";

export interface UserPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export const getPosts = async (): Promise<UserPost[]> => {
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  console.log("dasdsa", data.results);
  return data.results;
};
