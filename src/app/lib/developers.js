import clientPromise from './mongodb'

let client
let db
let developers

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    developers = await db.collection('developer')
  } catch (error) {
    console.log('error connecting to db', error)
  }
}

export async function getDevelopers() {
  try {
    if (!developers) await init()
    const result = await developers
      .find({})
      .map((developer) => ({ ...developer, _id: developer._id.toString() }))
      .toArray()

    return { developers: result }
  } catch (error) {
    return { error: 'Failed to fetch developers' }
  }
}

export async function getDeveloperById(developerId) {
  try {
    if (!developers) await init()

    const objectId = ObjectId.createFromHexString(developerId)

    const result = await developer
      .find({ where: { _id: objectId } })
      .map((developer) => ({ ...developer, _id: developer._id.toString() }))
      .toArray()

    return { developer: result }
  } catch (error) {
    return { error: 'Failed to fetch developers' }
  }
}
