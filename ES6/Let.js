let movie = "The noteBook";
function printMovie()
{
    let movie = "Forest Gump";
    return movie;
}

console.log(movie);
console.log(printMovie());

function newFunction()
{
    let isHorse = true;
    let saying = "1st";
    console.log("print "+ saying);

    if(isHorse)
    {
        let saying = "2nd";
        console.log("print "+ saying);
    }
    console.log("print "+ saying);
}
newFunction();