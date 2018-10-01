use bucketList;
db.dropDatabase();

db.items.insertMany([

    {
        rank: 1,
        activity: "Swim with Whale Sharks",
        category: "Adventure",
        location: "Mexico"
    },
    {
        rank: 2,
        activity: "Shark Diving",
        category: "Adventure",
        location: "Australia"
    },
    {
        rank: 3,
        activity: "Ninja training at a Dojo",
        category: "Spiritual",
        location: "Japan"
    }

])