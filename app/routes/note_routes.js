var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    // Getting the notes
    app.get('/notes/:id', (req, res) => {
        // find id on mLab documents
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error' : 'An error occured after get request'});
            } else {
                res.send(item);
            }
        })
    });

    // Creating the notes
    app.post('/notes', (req, res) => {
        // write parameters or json of the request here
        // create your notes here
        const note = { text: req.body.body, title: req.body.title};
        db.collection('notes').insert(note, (err,result) => {
            if (err){
                console.log('Error in if ');
                res.send({'error' : 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
        console.log('req.body ', req.body);
    });

    // Updating the notes
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(note);
          } 
        });
    });
    
    // Deleting the notes
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Note ' + id + ' deleted!');
          } 
        });
    });
};