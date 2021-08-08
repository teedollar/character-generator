const express = require('express');
const router = express.Router();
const Character = require('./Character');

/*Get all characters*/
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find({});
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    //res.json({ 'message': '12344' });
});

/*Add new character*/
router.post('/', async (req, res) => {
    const character = new Character({
        name: req.body.name,
        profession: req.body.profession
    });
    try {
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/* Delete a character */

module.exports = router;