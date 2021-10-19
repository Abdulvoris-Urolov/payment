const express = require('express')
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(console.log('MongoDBga ulanish hosil qilindi...'))
.catch((err) => console.error('MongoDBga ulanish vaqtida xato ro`y berdi...', err));

const app = express();

app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", usersRoute);


const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`${port}-port ishlayabdi...`))