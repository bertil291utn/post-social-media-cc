import { User } from '@interfaces/User'

export interface Login {
  id: string
  isActive: boolean
  user: User
  timestampIat?: number

}