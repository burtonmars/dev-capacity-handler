import {
  addNewStory,
  updateStory,
  deleteStory,
} from '../../src/app/lib/stories'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await addNewStory(req.body)
    if (result.success) {
      res.status(200).json({ success: true, id: result.insertedId })
    } else {
      res.status(500).json({ success: false, error: result.error })
    }
  } else if (req.method === 'PUT') {
    const result = await updateStory(req.body)
    if (result.success) {
      res.status(200).json({ success: true })
    } else {
      res.status(500).json({ success: false, error: result.error })
    }
  } else if (req.method === 'DELETE') {
    const result = await deleteStory(req.body)
    if (result.success) {
      res.status(200).json({ success: true })
    } else {
      res.status(500).json({ success: false, error: result.error })
    }
  } else {
    // Handle any other HTTP methods as not allowed
    res.setHeader('Allow', ['POST', 'PUT', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
