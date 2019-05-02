import db from './firestore/firebaseInit'

export const fetchOffices = async () => {
  const snapshot = await db.offices.orderBy("name", "asc").get()
  return snapshot.docs.map(doc => doc.data())
}
