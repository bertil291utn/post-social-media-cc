import { User } from 'interfaces/User'

export interface Post {
  id: string
  user: User
  timestamp: string
  description: string
  media?: string
  comments: string
  likes: string
}