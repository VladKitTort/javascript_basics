"use strict";

const post = {
    author: "John", // Вывисти это число
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 // Вывести это число.
            }
        },
        {
            userId: 5, // Вывести это число.
            userName: "Jane",
            text: "lorem ipsum 2", // Вывисти этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        }
    ]
};

console.log(post["author"]);
console.log(post["comments"][0]["rating"]["dislikes"]);
console.log(post["comments"][1]["userId"]);
console.log(post["comments"][1]["text"]);