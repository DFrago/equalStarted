migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uwkbdepmmsrox82")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uwkbdepmmsrox82")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
