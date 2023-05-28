import { ObjectId } from 'mongodb'

export type Story = {
  _id: number
  title: string
  description: string
  status: string
  points: number
  developer: string
}

export type Developer = {
  _id: string
  first_name: string
  last_name: string
  position: string
  level: string
  color: string
  stories: [Story]
}
