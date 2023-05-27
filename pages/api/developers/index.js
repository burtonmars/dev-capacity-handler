import { getDevelopers } from '../../../src/app/lib/developers'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { developers, error } = await getDevelopers()
      if (error) throw new Error(error)
      return res.status(200).json({ developers })
      //return res.status(200).json(developers)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
  res.setHeader('Allow', ['GET'])
  res.status(405).end({ message: `Method ${req.method} not allowed` })
}

export default handler
