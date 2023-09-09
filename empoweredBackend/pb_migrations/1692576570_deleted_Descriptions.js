migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j2jxpdmm70va43w");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "j2jxpdmm70va43w",
    "created": "2023-08-21 00:09:00.340Z",
    "updated": "2023-08-21 00:09:00.340Z",
    "name": "Descriptions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ilzc3lsa",
        "name": "Test",
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
})
