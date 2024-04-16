import { addNewStory } from '../../src/app/lib/stories'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Call the addNewStory function using data from the request body
    const result = await addNewStory(req.body)
    if (result.success) {
      res.status(200).json({ success: true, id: result.insertedId })
    } else {
      res.status(500).json({ success: false, error: result.error })
    }
  } else {
    // Handle any other HTTP methods as not allowed
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
