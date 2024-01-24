const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


// AuthUserData
// u59GPqs9PIPWrKE6



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://AuthUserData:u59GPqs9PIPWrKE6@cluster0.brfqf5n.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
      serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
      }
});

async function run() {
      try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection

            const usersCollection = client.db('infoUserData').collection('infoData');

            app.post('/infoData', async (req, res) => {
                  const newUserData = req.body;
                  console.log(newUserData);
                  const result = await usersCollection.insertOne(newUserData);
                  res.send(result);
            });







            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
      }
}
run().catch(console.dir);





app.get('/', (req, res) => {
      res.send('Users data server is running');
});






app.listen(port, () => {
      console.log(`server is running on PORT: ${port}`);
});

