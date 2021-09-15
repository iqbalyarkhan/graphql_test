const friendDB = {};

class Friend {
    constructor(id, {firstName, lastName, gender, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}

function findFriendAndUpdate (input) {
    friendDB[input.id] = input;
    console.log("After updates, your DB looks like this: ", friendDB);

}

//resolver map
const resolvers = {
    Query: {
        getFriend: (_,{id}) => {
            return new Friend(id, friendDB[id])
        },
    },

    Mutation: {
        createFriend: (_,{input}) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDB[id] = input;
            console.log("DB looks like this: ", friendDB);
            return new Friend(id, input);
        },
        updateFriend: (_,{input}) => {
            findFriendAndUpdate(input);
            return new Friend(input.id, input);
        }
    }
};

export {resolvers}