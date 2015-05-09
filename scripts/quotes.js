function rndquote(element) {
    var quotes, authors, i, txt;

    quotes      = [];
    authors     = [];

    quotes[0]   = "We have you surrounded, at least from this side."; 
    authors[0]  = "The Soldier in Team Fortress 2";

    quotes[1]   = "... and so I close, realizing that perhaps the ending has not yet been written.";
    authors[1]  = "Atrus in Myst";

    quotes[2]   = "The right man in the wrong place can make all the difference in the world."; 
    authors[2]  = "G-Man in Half-Life 2";

    quotes[3]   = "God made everything out of nothing, but the nothingness shows through."; 
    authors[3]  = "Paul Valery"; 

    quotes[4]   = "God loved the birds and invented trees. Man loved the birds and invented cages."; 
    authors[4]  = "Jaques Deval"; 

    quotes[5]   = "Don't ever take a fence down until you know the reason it was put up."; 
    authors[5]  = "G. K. Chesterton";

    quotes[6]   = "Be careful when you fight monsters, lest you become one.";
    authors[6]  = "Friedrich Nietzsche";

    quotes[7]   = "If you wish to make an apple pie from scratch, you must first invent the universe.";
    authors[7]  = "Carl Sagan";

    quotes[8]   = "We are what we pretend to be, so we must be careful about what we pretend to be.";
    authors[8]  = "Kurt Vonnegut";

    quotes[9]   = "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.";
    authors[9]  = "Bertrand Russell";

    quotes[10]  = "When you gaze long into an abyss the abyss also gazes into you.";
    authors[10] = "Friedrich Nietzsche";

    quotes[11]  = "C'mon, people, you can’t show the player a really big bomb and not let them blow it up.";
    authors[11] = "Gabe Newell on Half-Life 1";

    quotes[12]  = "Some people, when confronted with a problem, think \"I know, I'll use regular expressions.\" Now they have two problems.";
    authors[12] = "Jamie Zawinski";

    quotes[13]  = "But the rules of writing are like magic spells. If you never acquire them, then not using them says nothing.";
    authors[13] = "Randall Munroe";

    i = Math.floor(Math.random() * quotes.length);
    txt = "<blockquote>"+quotes[i];
    if (authors[i]) {txt += "<cite>"+authors[i]+"</cite>";}
    txt += "</blockquote>"
    document.getElementById(element).innerHTML = txt;
}
