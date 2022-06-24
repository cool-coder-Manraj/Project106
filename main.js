function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    var classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/N4JgqMKbI/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    
}