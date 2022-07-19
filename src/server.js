const express = require("express");
const bodyParser = require('body-parser');
const { initializeApp, applicationDefault } = require('firebase-admin/app')
require('firebase/firestore')
const { getFirestore } = require('firebase-admin/firestore')
const passport = require('passport')
const { AuthService } = require('./auth')
const { HeaderAPIKeyStrategy } = require('passport-headerapikey'); 
require('dotenv').config()


const HOST = "0.0.0.0";
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
const router = express.Router()

initializeApp({
  credential: applicationDefault()
});

passport.use(new HeaderAPIKeyStrategy(
  { header: 'apiKey', prefix: '' },
  false,
  async function(apiKey, done) {
    const authService = new AuthService()
    const checkKey = await authService.validateApiKey(apiKey, db)

    if(!checkKey) {
      return done(false)
    } 
    return done(true)
  }
))

const db = getFirestore();

const authMiddleware = (req, res, next) => {
  passport.authenticate(
    'headerapikey',
    { session: false, failureRedirect: '/api/unauthorized' },
    value => {
        if (value) {
          next();
        } else {
          res.sendStatus(401);
        }
      },
    )(req, res, next)
}

const validateUserObject = (user) => {
  const errors = []
  if(!user) {
    errors.push('user request body is empty')
  }
  if(!user.address) {
    errors.push('address is missing from user request body')
  }
  if(!user.discordUsername) {
    errors.push('discordUsername is missing from user request body')
  }
  if(!user.timestamp) {
    errors.push('timestamp is missing from user request body')
  }
  if(!user.discordUser) {
    errors.push('discordUsername is missing from user request body')
  }

  if(!user.avatar) {
    errors.push('avatar is missing from user request body')
  }
  return errors
}

app.post("/user", authMiddleware, (req, res) => {
  const user = req.body
  
  const errorsMaybe = validateUserObject(user)

  if(errorsMaybe.length > 0) {
    res.send(`Unable to create user due to the following errors: ${errorsMaybe.join(', ')}`)
    res.sendStatus(400)
  }

  const docRef = db.collection('users').doc(user.address)
  docRef.update(user, { merge: true })

  res.send(`User with address ${user.address} added`)
})

app.get('/user/:address', authMiddleware, async (req, res) => {
  const address = req.params.address

  const docRef = db.collection('users').doc(address)
  let data = []
  try {
    const doc = await docRef.get()
    if(doc.exists) {
      data.push(doc.data())
    }
  } catch(e) {
    res.send(`Error getting document: `, e)
    res.sendStatus(500)
  }

  res.send(data)

})

app.delete('/user/:address', authMiddleware, async (req, res) => {
  const address = req.params.address

  try {
    await db.collection('users').doc(address).delete()
  } catch(e) {
    res.send('Error deleting document', e)
    res.sendStatus(500)
  }

  res.send(`User with address ${address} deleted successfully`)

})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);