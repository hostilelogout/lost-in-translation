import { User } from '../User/User'

export const CreateUser = (id,username) => {
   const newUser = new User(id,username)
   return newUser
}