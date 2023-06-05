import { ObjectId } from 'mongodb'

export type Story = {
  _id: string
  title: string
  description: string
  status: string
  story_points: number
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

export type Section = {
  title: string
  tag: string
  stories: Story[]
}

export type DeveloperInfo = {
  storyId: string
  color: string
  developerInitials: string
}
