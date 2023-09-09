migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5wn83ei",
    "name": "Employment",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6mxv7yck",
    "name": "EmploymentRSE",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymucgybk",
    "name": "MeanHourlyWage",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wrobtmgf",
    "name": "MeanAnnualWage",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmkewx45",
    "name": "WageRSE",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwfrbql7",
    "name": "Percentile10",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0i6pyduj",
    "name": "Percentile25",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4bdbeepz",
    "name": "Percentile50",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jdnzbk9u",
    "name": "Percentile75",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nl3n6zmg",
    "name": "Percentile90",
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
  collection.schema.removeField("j5wn83ei")

  // remove
  collection.schema.removeField("6mxv7yck")

  // remove
  collection.schema.removeField("ymucgybk")

  // remove
  collection.schema.removeField("wrobtmgf")

  // remove
  collection.schema.removeField("mmkewx45")

  // remove
  collection.schema.removeField("lwfrbql7")

  // remove
  collection.schema.removeField("0i6pyduj")

  // remove
  collection.schema.removeField("4bdbeepz")

  // remove
  collection.schema.removeField("jdnzbk9u")

  // remove
  collection.schema.removeField("nl3n6zmg")

  return dao.saveCollection(collection)
})
