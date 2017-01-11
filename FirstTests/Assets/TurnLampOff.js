#pragma strict

var myLight:Light;
public var fadeOutSpeed:float = .01;
function Start () {

	myLight = GetComponent.<Light>();

}

function Update () {
	if(Input.GetKeyDown("space")==true){

		if(myLight.enabled==false){
		myLight.enabled=true;
		}
		else{
		myLight.enabled=false;
		}


	}

}