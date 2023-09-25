//Volume of Cylinder calculator using object classes 


//Constructor function for Cylinder Objects
function Cylinder (cylinderRadius, cylinderHeight){
    this.cylinderRadius = cylinderRadius
    this.cylinderHeight = cylinderHeight
    // cylinderRadius = parseInt(cylinderVolumeForm.cylinderRadius.value);
    // cylinderHeight = parseInt(cylinderVolumeForm.cylinderHeight.value);
}

// Picking values from html file
const rad = document.getElementById('cylinderRadius') 
const height = document.getElementById('cylinderHeight')     


//Creating a Cylinder Object
const myCylinder = new Cylinder(rad, height);

myCylinder.volume = function() {

    const volume =  Math.PI * (cylinderRadius.value ** 2) * cylinderHeight.value   
    document.getElementById("demo").innerHTML = `The volume is ${volume}`;

}   

//Display Cylinder Volume
document.getElementById('btn').addEventListener('click', myCylinder.volume)
