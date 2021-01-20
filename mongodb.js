const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURI = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

MongoClient.connect(
  connectionURI,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log(error)
    }

    const db = client.db(dbName)

    // db.collection('ding dong')
    //   .insertMany([
    //     {
    //       ding: 'bubble',
    //     },
    //     {
    //       ding: 'candy',
    //     },
    //     {
    //       ding: 'honololo',
    //     },
    //   ])
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err))

    // db.collection('ding dong')
    //   .drop()
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err))

    // db.collection('tasks')
    //   .insertOne({ task: "Stay idle and don't learn" })
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err))

    // db.collection('tasks')
    //   .deleteOne({ task: "Stay idle and don't learn" })
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err))

    // db.collection('tasks').findOne(
    //   { _id: new ObjectID('60068fbba8f7453fc447617f') },
    //   (error, task) => {
    //     if (error) {
    //       return error
    //     }

    //     console.log(task)
    //   }
    // )

    // db.collection('tasks')
    //   .updateOne({ task: 'Learn mongodb' }, { $set: { completed: true } })
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err))

    // db.collection('tasks')
    //   .updateMany({ completed: true }, { $set: { completed: false } })
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err))
    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, incompleteTasks) => {
    //     if (error) {
    //       return error
    //     }

    //     console.log(incompleteTasks)
    //   })

    //  db.collection('users').insertOne({
    //    name: 'Saad',
    //    age: 23,
    //  })

    //  db.collection('users').insertMany(
    //    [
    //      {
    //        name: 'Muaz',
    //        age: 19,
    //      },
    //      {
    //        name: 'Hammad',
    //        age: 14,
    //      },
    //    ],
    //    (error, result) => {
    //      if (error) {
    //        return console.log(error)
    //      }

    //      console.log(result.ops)
    //    }
    //  )

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       task: 'Learn mongodb',
    //       completed: false,
    //     },
    //     {
    //       task: 'Make portfolio',
    //       completed: false,
    //     },
    //     {
    //       task: 'Become worldClass developer',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log(error)
    //     }

    //     console.log(result.ops)
    //   }
    // )
  }
)
