import clientPromise from './mongodb'
const { ObjectId } = require('mongodb')

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

export async function addNewStory(newStory) {
  try {
    if (!stories) await init()
    const result = await stories.insertOne(newStory)
    return { success: true, insertedId: result.insertedId }
  } catch (error) {
    return { success: false, error: 'Failed to save the story' }
  }
}

export async function updateStory(story) {
  try {
    if (!stories) await init()
    const { _id, ...updateFields } = story
    const result = await stories.updateOne(
      { _id: ObjectId.createFromHexString(_id) },
      { $set: updateFields }
    )
    if (result.matchedCount === 0) {
      return { success: false, error: 'No matching story record found' }
    }
    return { success: true }
  } catch (error) {
    console.error('Update story error:', error)
    return { success: false, error: 'Failed to update the story' }
  }
}

export async function deleteStory(story) {
  try {
    if (!stories) await init()
    const result = await stories.deleteOne({
      _id: ObjectId.createFromHexString(story._id),
    })
    if (result.deletedCount === 0) {
      return { success: false, error: 'No matching story record found' }
    }
    return { success: true }
  } catch (error) {
    console.error('Delete story error:', error)
    return { success: false, error: 'Failed to delete the story' }
  }
}
