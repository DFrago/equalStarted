migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhbtyfgv",
    "name": "Descriptions",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // remove
  collection.schema.removeField("uhbtyfgv")

  return dao.saveCollection(collection)
})
