const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/task');

const taskSchema = new mongoose.Schema({
    user: String,
    task_name: String,
    task_type: String,
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;