// https://teachablemachine.withgoogle.com/models/MEq7OYx1k/
Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:100
})

prediction1=""
prediction2=""

camera=document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image'src='"+data_uri+"'/>"
    })
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/MEq7OYx1k/model.json",modelLoaded)

function modelLoaded(){
    console.log("model is loaded")
    
}

function check(){
    img=document.getElementById("image")
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
        
    }
    else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label
        document.getElementById("result_emotion_name2").innerHTML=results[1].label
    prediction1=results[0].label
    prediction2=results[1].label
    if(results[0].label=="happy"){
        document.getElementById("update_emoji").innerHTML="&#128522"
    }
    if(results[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML="&#128532"
    }
    if(results[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML="&#128542"
    }
    if(results[1].label=="happy"){
        document.getElementById("update_emoji2").innerHTML="&#128522"
    }
    if(results[1].label=="sad"){
        document.getElementById("update_emoji2").innerHTML="&#128532"
    }
    if(results[1].label=="angry"){
        document.getElementById("update_emoji2").innerHTML="&#128542"
    }
    }
}
