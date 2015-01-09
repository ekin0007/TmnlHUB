var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'test',
        charset: 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

var user = bookshelf.Model.extend({
        tableName: 'books'
    }),
    aa = bookshelf.Collection.extend({
        model: user
    });

new aa({'name': '111'})
    //.where()
    .fetch()
    .then(function (model) {
        console.log(model.get('name'));
    });