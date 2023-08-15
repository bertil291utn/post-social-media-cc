import { Post } from '@interfaces/Post';

export function sortPostsByTimestampDescending(posts: Array<Post>) {
  return posts.slice().sort((a, b) => {
    const timestampA = new Date(a.timestamp).getTime();
    const timestampB = new Date(b.timestamp).getTime();
    return timestampB - timestampA;
  });
}