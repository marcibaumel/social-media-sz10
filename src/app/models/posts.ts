import { Comment } from "./comments";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments?: Comment[]
}
