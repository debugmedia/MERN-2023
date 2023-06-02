-  show dbs
-  use <dbname>
-  show collections (like tables in sql )

# CRUD

-  INSERT
# db.insertOne({name:"debug media"})
-  INSERT Many 
# db.insertMany([{name:"asd"},{name:"asd"}])
-  Find All -
#  db.find()
-  Find with limit 
# db.find().limit(2)
-  Find with Sort limit
# db.find().sort({name:1}).limit(2)
-  Find with Specific attribute 
#  db.find({name:"debug"})
-  Find with Specific attribute and return only specific attribute
#  db.find({name:"debug"},{name:1,age:1, _id:0 (0 will ignore ID)})
#  db.users.find({name:{ $not: { $eq:"abc" }} })
#  db.users.find({age:{ $lt:15 }})
#  db.users.find({name:{ $in:["abc"] }})
-  UPDATE One :
#  db.users.updateOne({name:"abc_updated"}, {$set:{ name:"abc_updated_2" }})
-  UPDATE ARRAY:
#   db.users.updateOne({_id:ObjectId("6475de6d4cb7d51e9919b0e1")}, { $push: {skills: "malayalam"} })
#   $push to add item
#   $pull to remove a specific item
#   $unset: To remove a "field key"
    Update Many
#   .updateMany({}, {$rename:{"key":"new key"} })$rename: To remove a "field key"
#   db.users.update({name:"abc_updated"}, {$set:{ name:"abc_updated_2" }})

-  DELETE: 
<!-- -  Delete many: .remove({name:"abc"})
-  Delete One: .remove({name:"road"}, {justOne: true}) -->

-  Drop Collection: db.yaya.drop()
