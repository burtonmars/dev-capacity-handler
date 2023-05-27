import { ObjectId } from 'mongodb'

export type Ticket = {
  id: number
  title: string
  description: string
  status: string
}

export type Developer = {
  _id: string
  first_name: string
  last_name: string
  position: string
  level: string
  color: string
  tickets: [Ticket]
}
