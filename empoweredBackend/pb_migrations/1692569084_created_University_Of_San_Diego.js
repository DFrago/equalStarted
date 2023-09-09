migrate((db) => {
  const collection = new Collection({
    "id": "98m2a7y3g3p4dfr",
    "created": "2023-08-20 22:04:44.877Z",
    "updated": "2023-08-20 22:04:44.877Z",
    "name": "University_Of_San_Diego",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("98m2a7y3g3p4dfr");

  return dao.deleteCollection(collection);
})
