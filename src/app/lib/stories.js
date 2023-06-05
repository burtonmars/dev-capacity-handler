import clientPromise from './mongodb'

let client
let db
let stories

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    stories = await db.collection('story')
  } catch (error) {
    console.log('error connecting to db', error)
  }
}

export async function getStories() {
  try {
    if (!stories) await init()
    const result = await stories
      .find({})
      .map((story) => ({ ...story, _id: story._id.toString() }))
      .toArray()

    return { stories: result }
  } catch (error) {
    return { error: 'Failed to fetch stories' }
  }
}
