migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1lbmye5p",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "98m2a7y3g3p4dfr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // remove
  collection.schema.removeField("1lbmye5p")

  return dao.saveCollection(collection)
})
