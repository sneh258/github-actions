const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const taskRouter = require('./src/routes/toDoRoutes');
app.use('/tasks', taskRouter);



app.listen(port, () => {
    console.log(`server started listening on port ${port}`);
});




