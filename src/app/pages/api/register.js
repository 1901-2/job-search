// my-next-app/pages/api/register.js
import mongoose from 'mongoose';
import User from '../../models/user';

const handler = async (req, res) => {
  try {
    // Connect to MongoDB (this could also be in a separate file)
    await mongoose.connect('mongodb+srv://aniketjimishra21:<password>@cluster0.ygiqqte.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Handle user registration logic here

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error connecting to MongoDB or handling registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
