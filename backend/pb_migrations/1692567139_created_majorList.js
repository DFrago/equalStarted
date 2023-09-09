migrate((db) => {
  const collection = new Collection({
    "id": "uwkbdepmmsrox82",
    "created": "2023-08-20 21:32:19.358Z",
    "updated": "2023-08-20 21:32:19.358Z",
    "name": "majorList",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dhpi2imv",
        "name": "University_Of_San_Diego",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0svkqoam",
        "name": "Testing_State_University",
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
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uwkbdepmmsrox82");

  return dao.deleteCollection(collection);
})
