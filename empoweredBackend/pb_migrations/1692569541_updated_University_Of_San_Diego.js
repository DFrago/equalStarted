migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
