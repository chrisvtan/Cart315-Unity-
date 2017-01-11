#pragma strict


var rb: Rigidbody;
var grounded = false;

public var JumpForce = 500.0f;

function Start() {
  rb = GetComponent. < Rigidbody > ();
}

function Update() {
  //moving the cube around
  var moveVertical: float = Input.GetAxis("Vertical");
  var moveHorizontal: float = Input.GetAxis("Horizontal");
  transform.position.z += moveVertical;
  transform.position.x += moveHorizontal;
  //cube jumpswhen space is pressed && touching something
  if (Input.GetKeyDown("space")&&grounded) {


    rb.AddForce(Vector3(0, JumpForce, 0));
  }
}


function onCollisionEnter(colliosion: Collision) {

  if (collision.collider.tag =="ground") {
    grounded = true;
  }
}


function onCollisionExit() {

  grounded = false;
}