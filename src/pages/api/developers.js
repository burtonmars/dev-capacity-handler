import clientPromise from '../../app/lib/mongodb'

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('dev-capacity-handler')
    const developers = await db.collection('developer').find({}).toArray()
    res.json(developers)
  } catch (e) {
    console.error(e)
  }
}
