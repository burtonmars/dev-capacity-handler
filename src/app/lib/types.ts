export type Ticket = {
  id: number
  title: string
  description: string
  status: string
}

export type Developer = {
  firstName: string
  lastName: string
  position: string
  level: string
  color: string
  tickets: [Ticket]
}
