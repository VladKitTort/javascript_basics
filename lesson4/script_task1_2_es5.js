"use strict"

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}


Post.prototype.edit = function(){
    console.log(this.text);
}

let pop = new Post("Генадий", "Слово о Даниле!", "14.02.1987");
pop.edit();

function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);

AttachedPost.prototype.makeTextHighlighted = function(){
    console.log(this.highlighted);
    this.highlighted = true;
    console.log(this.highlighted);
}

let lol = new AttachedPost("Слава", "Слово о Снигире!", "11.02.1987");
lol.edit();
lol.makeTextHighlighted();

