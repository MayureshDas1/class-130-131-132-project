img = "";
statuss = "";
objects1 = [];

function preload()
{
    img = loadImage("desk.jpg");
}

function  setup()
{
    canvas = createCanvas(600,420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd",modelLoaded)
}

function modelLoaded()
{
    console.log("Model loaded")
    statuss = true
    object_detector.detect(img,gotResults)
}

function gotResults(error, results) 
{ 
    if (error) 
    { 
        console.log(error);
     } 
     console.log(results); 
     objects1 = results;
     }

