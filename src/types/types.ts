export interface User {
  id: number
  username: string
  email: string
  password?: string
}

export interface AuthReq {
  username: string
  password: string
  email?: string
}
export interface AuthRes {
  user: User
  jwt: string
}
