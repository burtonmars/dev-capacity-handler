import { getStories } from '../../../src/app/lib/stories'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { stories, error } = await getStories()
      if (error) throw new Error(error)
      return res.status(200).json({ stories })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
  res.setHeader('Allow', ['GET'])
  res.status(405).end({ message: `Method ${req.method} not allowed` })
}

export default handler
