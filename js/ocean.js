
// STANDARD GLOBAL VARIABLE

var scene,camera,renderer;

function init()
{

	// SCENE
	scene = new THREE.Scene();

	// CAMERA
	camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,1,10000);
	camera.position.z = 300;

	// STATS
	stats = new Stats();
	stats.setMode(1);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	stats.domElement.style.zIndex = 100;
	document.body.appendChild(stats.domElement); 

	// RENDERER
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var pathImg = "img/";
	var urlsImg = 
	[
		pathImg+"left.png",
		pathImg+"top.png",
		pathImg+"right.png",
		pathImg+"bottom.png",
		pathImg+"front.png",
		pathImg+"back.png"
	];

	var textureCube = THREE.ImageUtils.loadTextureCube( urlsImg );

	var shader = THREE.ShaderLib["cube"];
	var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
	uniforms['tCube'].texture= textureCube;   // textureCube has been init before
	var material = new THREE.ShaderMaterial({
    fragmentShader    : shader.fragmentShader,
    vertexShader  : shader.vertexShader,
    uniforms  : uniforms
});

	// build the skybox Mesh 
skyboxMesh    = new THREE.Mesh( new THREE.BoxGeometry( 100000, 100000, 100000, 1, 1, 1, null, true ), material );
// add it to the scene
scene.add( skyboxMesh );
}

function animate()
{
	requestAnimationFrame(animate);
	stats.update();
	render();
}


function render()
{
	
}

init();
animate();