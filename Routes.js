const thoughtRoutes = require('express').Router();
const Thought = require('./Model')


/**
 *  Description :   get all entries
 *  method      :   get
 */

thoughtRoutes.get('/', (req, res) =>{
    Thought.find()
        .then(thoughts => res.status(200).json({thoughts}))
        .catch(err => res.status(404).json({error: err.message}))
})



/**
 *  Description :   add new thought
 *  method      :   post
 */

thoughtRoutes.post('/', (req, res) =>{
    const {text, title} = req.body;
    if(!text.trim().length && !title.trim().length){
        return res.status(400).json({error: 'Thought cannot be empty'})
    }
    const payload = {
        text: text.toString(),
        title: title.toString()
    }
    Thought.create(payload)
        .then(thought => res.status(200).json({message: 'New thought added', thought}))
        .catch(err => res.status(404).json({error: err.message}))
})



module.exports = thoughtRoutes