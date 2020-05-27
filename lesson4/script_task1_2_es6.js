"use strict"


class Post{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;        
    }

    edit(){
        console.log(this.text);
    }
}

let pop = new Post("Генадий", "Слово о Даниле!", "14.02.1987");
pop.edit();


class AttachedPost extends Post{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted(){
        console.log(this.highlighted);
        this.highlighted = true;
        console.log(this.highlighted);
    }
}

let lol = new AttachedPost("Слава", "Слово о Снигире!", "11.02.1987");
lol.edit();
lol.makeTextHighlighted();