using UnityEngine;
using System.Collections;

public class Loader : MonoBehaviour {

	// Use this for initialization
	void Start () {
		StartCoroutine (mainWait());


	//StartCoroutine (waitToShow (1f));
}
	// Update is called once per frame
	void Update () {

	}
	IEnumerator mainWait(){
		Debug.Log ("mainWait Start");
		yield return new WaitForSeconds (3f);
		Destroy (gameObject);
		Debug.Log ("done Main done");
//		yield return StartCoroutine (waitToShow (3f));
		Debug.Log ("mainWait Finish");
}

}