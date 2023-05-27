import { getDevelopers } from '../../../lib/developers'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { developers, error } = await getDevelopers()
      if (error) throw new Error(error)
      return res.status(200).json({ developers })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: e.message })
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(405).json({ message: `Method ${req.method} not allowed` })
}

export default handler
