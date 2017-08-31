
const users = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_ROOM_LIST':
            console.info("UPDATE", state, action.data);
            return [...state, action.data];
        case 'GET_ROOMS':
            return action.data;
        default:
            return state;
    }
};


/*
const users = function () {
    return(
        [
            {
                "index": 0,
                "guid": "741a06ed-1a4b-48b0-ae02-80f392d79e7c",
                "isActive": false,
                "balance": "$1,095.30",
                "picture": "http://placehold.it/32x32",
                "age": 31,
                "eyeColor": "blue",
                "name": {
                    "first": "Benjamin",
                    "last": "Mcmillan"
                }
            },
            {
                "index": 1,
                "guid": "20c76369-148b-452c-a005-58a60b425bee",
                "isActive": false,
                "balance": "$1,289.75",
                "picture": "http://placehold.it/32x32",
                "age": 34,
                "eyeColor": "green",
                "name": {
                    "first": "Mccoy",
                    "last": "Aguirre"
                }
            },
            {
                "index": 2,
                "guid": "e7b6f319-383e-40f0-a01a-c6446d1a43fb",
                "isActive": true,
                "balance": "$2,205.37",
                "picture": "http://placehold.it/32x32",
                "age": 40,
                "eyeColor": "blue",
                "name": {
                    "first": "Mindy",
                    "last": "Walton"
                }
            },
            {
                "index": 3,
                "guid": "66d63c8f-ea3f-43e8-8fce-decc088499ce",
                "isActive": true,
                "balance": "$2,990.46",
                "picture": "http://placehold.it/32x32",
                "age": 40,
                "eyeColor": "green",
                "name": {
                    "first": "Wilkerson",
                    "last": "Rojas"
                }
            },
            {
                "index": 4,
                "guid": "b9f67a21-adc5-42fb-a630-0011624c10f7",
                "isActive": false,
                "balance": "$3,353.52",
                "picture": "http://placehold.it/32x32",
                "age": 25,
                "eyeColor": "green",
                "name": {
                    "first": "Queen",
                    "last": "Newman"
                }
            }
        ]
    );
};
*/

export default users;