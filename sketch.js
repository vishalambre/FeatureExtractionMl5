
let featureExtractor;
let trainobj1;
let trainobj2;
let classifier;
let predict;
let train;

function addobj1(){
    classifier.addImage('obj1',()=>{
        console.log('obj1 added');
    });   
    }

function addobj2(){
    classifier.addImage('obj2',()=>{
        console.log('obj2 added');
    });
}

function predictClass(){
    classifier.classify(gotResults);
}


function gotResults(error,results){

    if(error){
        console.error(error);
    }
    else{
        // mobilenet.predict(gotResults);
        // console.log(results);
        document.getElementById('label').innerHTML = results;
        predictClass();
    }
}

function videoReady(){
    console.log('Video Ready');
}

function trainEx(){
    classifier.train(function(lossValue) {
        console.log('Loss is', lossValue)
      });
    }

function setup(){
    createCanvas(640,480);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    
    featureExtractor = ml5.featureExtractor('Mobilenet',() =>{console.log('Model Loaded')});
    createP('');
    classifier=featureExtractor.classification(video,videoReady);
    trainobj1 = createButton('trainobj1');
    trainobj2 = createButton('trainobj2');
    predict = createButton('Predict');
    train = createButton('Train');
    

    trainobj1.mousePressed(addobj1);
    trainobj2.mousePressed(addobj2);
    predict.mousePressed(predictClass);
    train.mousePressed(trainEx);

    

}


function draw(){
    background(0);
    image(video, 0, 0);
    
}



  