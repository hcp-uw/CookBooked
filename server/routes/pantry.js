import express from 'express';
import { promises as fs } from 'fs';
var router = express.Router();

router.get('/remove', async (req, res) => {
    console.log('TODO: remove');
    res.send("TODO: remove");
});

router.get('/add', async (req, res) => {
    console.log('TODO: add');
    res.send("TODO: add");
});

router.get('/', async (req, res) => {
    console.log('TODO Jeewon: print out json contents in nice way');
    res.send("TODO Jeewon: print out json contents in nice way")
});


export default router;