import { Post } from '@interfaces/Post'

export interface User {
  id: string
  avatarURL: string
  username: string
  name: string
  likedPosts?: Array<Post>
}