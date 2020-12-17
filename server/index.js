import express, {json, urlencoded} from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from './config.js';
import days from './routes/days.route.js';

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use('/days', days);

mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDb connected')).catch((err) => console.error(err))

app.use('/:endpoint', (req, res, next) => {
  const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
  
  if (req.params.endpoint !== 'login') {
    if (decoded.key === config.TOKEN_KEY.key) {
      next();
    } else {
      res.error({
        status: 'error: no any token'
      });
    }
  } else {
    next();
  }
})

app.post('/login', (res, req) => {
  const {key} = res.body;
  
})

app.listen(config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}`);
})