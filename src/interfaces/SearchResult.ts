import { Post } from "./Post";
import { UserPreview } from "./UserPreview";

export interface SearchResult {
  users: UserPreview[];
  posts: Post[];
}
