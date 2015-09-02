#pragma strict 
var guiGame : Texture; 
var guiStart : Texture; 
var guiSetting : Texture;
var guiCredit : Texture; 
var guiStartB : GUIStyle; 
var guiSettingB : GUIStyle; 
var guiCreditB : GUIStyle; 

function Start () { 

} 

function Update () { 

} 


function OnGUI () { 
//GUI.DrawTexture /*(Rect (0,0,1024,768),guiGame)*/; 
	if(GUI.Button(Rect(400,400,200,150),guiStart,guiStartB)) {
		Application.LoadLevel ("LV1");
}	if(GUI.Button(Rect(650,400,200,150),guiSetting,guiSettingB)) { 
		Application.LoadLevel ("Setting");
} 	if(GUI.Button(Rect(150,400,200,150),guiCredit,guiCreditB)) { 
		Application.LoadLevel ("Credit"); } 
}

