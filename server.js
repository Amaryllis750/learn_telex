const application = require('./app');

const PORT = 8000 || process.env.PORT;

application.listen(PORT, () => {
    console.log(`The application is listening on the port ${PORT}...`)
});
