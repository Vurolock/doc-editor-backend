const Note = require('./models/note');

Note.sync({ force: true })
    .then(() => {
        Note.create({
            title: "Test note #1",
            content: "Hello World!"
        });
    }).then(() => {
        Note.create({
            title: "Test note #2",
            content: "Goodbye World!"
        });
    });