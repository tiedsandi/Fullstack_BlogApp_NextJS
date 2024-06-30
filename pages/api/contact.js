import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({message: 'Invalid input'});
      return;
    }

    //store it in a database
    const newMessage = {email, name, message};

    //connect to the database
    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://sandi:VrppPkMWW23jQTm7@cluster0.hewldxh.mongodb.net/my-site?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({message: 'Failed to connect to database'});
      return;
    }

    const db = client.db();

    try {
      db.collection('messages').insertOne(newMessage);
    } catch (error) {
      res.status(500).json({message: 'Storing message failed'});
      return;
    }

    res.status(201).json({message: 'Message received', message: newMessage});
  }
}

export default handler;
