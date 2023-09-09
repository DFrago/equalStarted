migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sgnpmf5o",
    "name": "Name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhbtyfgv",
    "name": "Description",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sgnpmf5o",
    "name": "Majors",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
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
})
