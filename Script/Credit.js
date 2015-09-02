#pragma strict 
var guiGame : Texture; 

var guiRight : Texture; 
var guiLeft : Texture;

var guiRightB : GUIStyle; 
var guiLeftB : GUIStyle; 


function Start () { 

} 

function Update () { 

} 


function OnGUI () { 
GUI.DrawTexture (Rect(0,0,Screen.width,Screen.height),guiGame); 
	//if(GUI.Button(Rect(100,600,100,80),guiRight,guiRightB)) {
	//	Application.LoadLevel ("Credit2");
//}	
if(GUI.Button(Rect(0,600,100,80),guiLeft,guiLeftB)) { 
		Application.LoadLevel ("first");
} 	
}

