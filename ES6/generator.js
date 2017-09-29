function* sampleGernerator()
{
    yield 'apples';
    yield 'orange';
    console.log(`Line after ornage.................`);
    yield 'mango';

}

let sample = sampleGernerator();

console.log(sample.next()); // run till found next yield
console.log(sample.next().value); // run the value till found next yield
console.log(sample.next().value); // run the value till found next yield
console.log(sample.next().value);// no more yield remain,so undefined


console.log(`****************************************************************`);

function* another()
{
    let id = 0;
    while(id<3)
    yield id++;
}

let runSample = another();

console.log(runSample.next());
console.log(runSample.next().value);
console.log(runSample.next().value);
console.log(runSample.next().value);