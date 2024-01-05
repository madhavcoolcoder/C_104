








Webcam.set({
    width: 350,
    height: 380,
    image_format : "png",
    png_quality:50
});

camera = document.getElementById("camera");

Webcam.attach( "#camera" );

function take_snapshot()
{
    Webcam.snap[function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    }];
}

console.log('ml5 version:', ml5.version);
classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x8lD2hnfD/model.json",modelLoaded);