migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // remove
  collection.schema.removeField("rfhb4rbb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfhb4rbb",
    "name": "Majors_test",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
