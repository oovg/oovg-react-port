import express from 'express';
import path from 'path';
import React from 'react';

let router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Index'
  });
});

router.get('/design', (req, res) => {
  res.render('design', {
    title: 'Design'
  });
});

router.get('/explore', (req, res) => {
  res.render('explore', {
    title: 'Explorer'
  });
});

router.get('/facilitation', (req, res) => {
  res.render('facilitation', {
    title: 'Facilitation'
  });
});

export default router;
