import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Day from '../model/day.model.js';

const dayRoutes = express.Router();

dayRoutes.get('/', (req, res) => {
  console.log('get request');
  res.send(JSON.stringify({
    title: 'go to hell'
  }))
})

export default dayRoutes;