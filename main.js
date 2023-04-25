Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera");
console.log("ml5 version is ", ml5.version);

function takepic() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="capture_face" src="' + pic + '">';
    });

}
img_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/N4STZI3WG/model.json", model_ready);

function model_ready() {
    console.log("Model is working!");
}

function checkpic() {
    img = document.getElementById("capture_face");
    img_model.classify(img, gotresult);
}

function gotresult(e, r) {
    if (e) {
        console.error(e)
    } else {
        console.log(r);
        document.getElementById("face_name").innerHTML=r[0].label;
        document.getElementById("face_a").innerHTML=r[0].confidence.toFixed(2);

    }
}