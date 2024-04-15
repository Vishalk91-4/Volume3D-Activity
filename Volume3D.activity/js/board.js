define('volume-3d', ['vue', 'three'], function(Vue, THREE) {
    return Vue.component('volume-3d', {
        template: '<div id="board"></div>',
        mounted() {
            this.initThreeJS();
        },
        methods: {
            initThreeJS() {
                const scene = new THREE.Scene();

                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.z = 5;

                const renderer = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.getElementById('app').appendChild(renderer.domElement);

                const boardGeometry = new THREE.BoxGeometry(1, 0.1, 1); 

                const boardMaterial = new THREE.MeshBasicMaterial({color: 0x8B4513});

                const board = new THREE.Mesh(boardGeometry, boardMaterial);

                scene.add(board);

                function animate() {
                    requestAnimationFrame(animate);

                    board.rotation.y += 0.01;

                    renderer.render(scene, camera);
                }

                animate();
            }
        }
    });
});
