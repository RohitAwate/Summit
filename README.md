![Header](assets/SummitHeader.png)

# What is Summit?
Summit is the upcoming **synchronization server** for the Everest REST client. It will facilitate the synchronization of your Everest projects between multiple devices and multiple members of your team.

It will be available as a **subscription-based cloud-service**. Plans will be declared early next year when Everest is officially released.

Summit will be written in **Node.js**.

# Components
### RESTful API
- Summit will **primarily** be powered by a RESTful API. Everest will make calls to it through `SummitDataManager` which will implement `DataManager` and thus can be managed by `SyncManager`.
- This API shall provide endpoints for all the core data structures in Everest such as the `ProjectState` and its sub-structures such as `Request`, for example.
- Almost every endpoint will support `GET`, `POST`, `PATCH` and `DELETE` requests.
###### Get all requests from a project
```
GET /api/projects/<ProjectID>/requests/
```

###### Change the target and HTTP method of a particular request
```
PATCH /api/projects/<ProjectID>/requests/<RequestID>

{
    "target": "https://anapioficeandfire.com/api/characters/1303",
    "httpMethod": "POST"
}
```
- This API will use **Express**.

### Live Sync
- For team projects, when one team member makes some changes to the Everest Project, they will need to be communicated to other members of the team.
- Summit will need to push them to these clients. This will be achieved using Socket.IO.
- Everest will implement a new `SummitDataManagerAsync` class which will contain callbacks which will react to events received from the Socket.IO channel.

### Database
- Summit will use MongoDB as a database.

# Open Source
Summit is licensed under the **Apache 2.0 License**. It is made open-source so that users have the **option to self-host** the server and configure their Everest installations to use it.