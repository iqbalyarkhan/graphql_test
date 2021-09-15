import express from 'express';
import {schema} from './schema';
import {graphqlHTTP} from 'express-graphql';

const app = express();

app.get('/', (req,res) => {
    res.send('Graphql is amazing!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));