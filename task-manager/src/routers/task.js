const express = require ('express');
const Task = require ('../models/task');
const router = new express.Router();

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send (e);
    }
    
    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // });
});

router.get('/tasks', async(req, res) => {
    try{
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks);
    // }).catch((e)=> {
    //     res.status(500).send();
    // });
})

router.get('/task/:id', async (req, res) => {
    const _id =req.params.id;
    try {
        const task =await Task.findById(_id);
        if(!task) {
            return res.status (404).send();
        }

        res.send(task);
    } catch (e) {
        res.status(500).send();
    }

    // Task.findById(_id).then((task) => {
    //     if(!task) {
    //         return res.status (404).send();
    //     }

    //     res.send(task);
    // }).catch((e) => {
    //     res.status(500).send();
    // });
});
router.delete('/tasks/:id', async (req, res) => {
    try{
        const task =await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e){
        res.status(500).send(e);
    }
});

module.exports =router;
