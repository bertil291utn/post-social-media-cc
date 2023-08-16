import { User } from '@interfaces/User'

export interface Login {
  id: string
  isAcive: boolean
  user: User
  timestampIat?: number

}