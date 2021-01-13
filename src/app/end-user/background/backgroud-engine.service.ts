import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
// import Delaunator from 'delaunator';
import ImprovedNoise from './functions/improved-noise';

@Injectable({ providedIn: 'root' })
export class BackgroundEngineService implements OnDestroy {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private frameId = 0;

  private mouseX = 100; private mouseY = 100;
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  count = 0;
  RADIUS = 800;
  LINES = 300;

  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;
  FLOOR_RES = 10;
  FLOOR_HT = 650;
  stepCount = 0;
  noiseScale = 10.5;
  noiseSeed = Math.random() * 100;

  moverGroup!: THREE.Object3D;
  floorGeometry!: THREE.Geometry;
  floorMaterial!: THREE.MeshBasicMaterial;
  pointLight!: THREE.PointLight;
  pointLight2!: THREE.PointLight;
  pGeometry!: THREE.Geometry;
  FLOOR_WIDTH = 7600;
  FLOOR_DEPTH = 4800;
  MOVE_SPD = 1.9;

  snoise = ImprovedNoise();
  textureLoader = new THREE.TextureLoader();

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId !== 0) {
      cancelAnimationFrame(this.frameId);
    }
  }
/*
  params() {
    var bluriness = 5;
    hblur.uniforms['h'].value = bluriness / window.innerWidth;
    vblur.uniforms['v'].value = bluriness / window.innerHeight;
    hblur.uniforms['r'].value = vblur.uniforms['r'].value = 0.5;
    filmPass.uniforms.grayscale.value = 0;
    filmPass.uniforms['sCount'].value = 2;
    filmPass.uniforms['sIntensity'].value = 0.2;
    filmPass.uniforms['nIntensity'].value = 1;
    effectVignette.uniforms["offset"].value = 1.0;
    effectVignette.uniforms["darkness"].value = 1.3;
}
*/

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
  }

  init(canvas: HTMLCanvasElement): void {
   this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 4000);
   this.camera.position.z = 1750;

   this.scene = new THREE.Scene();
   this.scene.fog = new THREE.FogExp2(0x1c3c4a, 0.00045);

   const hemisphereLight = new THREE.HemisphereLight(0xe3feff, 0xe6ddc8, 0.7);
   this.scene.add(hemisphereLight);
   hemisphereLight.position.y = 300;

   // middle light


   const light = new THREE.AmbientLight( 0x404040, 0.8 ); 
   this.scene.add( light );

   this.pointLight = new THREE.PointLight(0x7bffed, 0.6);
   this.pointLight.position.z = 200;
   this.scene.add(this.pointLight);

   this.pointLight2 = new THREE.PointLight(0x8000ff, 1);
   this.pointLight2.position.z = 200;
   this.scene.add(this.pointLight2);

   const path = 'assets/images/reflection-imgs/';
   const format = '.jpg';
   const urls = [
       path + 'px' + format, path + 'nx' + format,
       path + 'py' + format, path + 'ny' + format,
       path + 'pz' + format, path + 'nz' + format
   ];

   const reflectionCube = new THREE.CubeTextureLoader().load(urls);
   reflectionCube.format = THREE.RGBFormat;

   const cubeMaterial = new THREE.MeshPhongMaterial({
       color: 0xffffff,
       envMap: reflectionCube,
       combine: THREE.MixOperation,
       side: THREE.DoubleSide,
       reflectivity: 0.5,
       flatShading: true
   });

   this.moverGroup = new THREE.Object3D();
   this.scene.add(this.moverGroup);
   const floorGroup = new THREE.Object3D();

   const floorMaterial = new THREE.MeshBasicMaterial({
       color: 0x000000, // diffuse
       side: THREE.DoubleSide,
       blending: THREE.AdditiveBlending,
       wireframe: true
   });

   // add extra x width
   this.floorGeometry = new THREE.PlaneGeometry(this.FLOOR_WIDTH + 1200, this.FLOOR_DEPTH, this.FLOOR_RES, this.FLOOR_RES);
   const floorMesh = new THREE.Mesh(this.floorGeometry, cubeMaterial);
   const floorMesh2 = new THREE.Mesh(this.floorGeometry, floorMaterial);


   floorMesh2.position.y = 50;
   floorMesh2.position.z = 5;
   floorGroup.add(floorMesh);
   floorGroup.add(floorMesh2);
   this.scene.add(floorGroup);
   floorMesh.rotation.x = Math.PI / 1.65;
   floorMesh2.rotation.x = Math.PI / 1.65;
   floorGroup.position.y = 180;

   this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas,
    });
   this.renderer.setPixelRatio( window.devicePixelRatio );
   this.renderer.setSize( window.innerWidth, window.innerHeight );

   document.addEventListener( 'mousemove', (event) => {
    this.mouseX = event.clientX - window.innerWidth / 2 ;
    this.mouseY = event.clientY - window.innerHeight / 2 - 300;


    }, false );
   window.addEventListener( 'resize', this.onWindowResize, false );

   this.renderer.setClearColor('white');
  }

  setWaves(): void {
    this.stepCount++;
    this.moverGroup.position.z = -this.MOVE_SPD;
    let i;
    let ipos;
    const offset = this.stepCount * this.MOVE_SPD / this.FLOOR_DEPTH * this.FLOOR_RES;

    for (i = 0; i < this.FLOOR_RES + 1; i++) {
        for (let j = 0; j < this.FLOOR_RES + 1; j++) {
            ipos = i + offset;
            if ((i > 30) || (j < 12) || (j > 48)) {
                this.floorGeometry.vertices[i * (this.FLOOR_RES + 1) + j].z =
                this.snoise.noise(ipos / this.FLOOR_RES * this.noiseScale, j /
                    this.FLOOR_RES * this.noiseScale, this.noiseSeed) * this.FLOOR_HT;
            } else if (i > 25 && i < 30) {
                this.floorGeometry.vertices[i * (this.FLOOR_RES + 1) + j].z =
                this.snoise.noise(ipos / this.FLOOR_RES * this.noiseScale, j /
                    this.FLOOR_RES * this.noiseScale, this.noiseSeed) * (this.FLOOR_HT / 1.2);
            } else {
                this.floorGeometry.vertices[i * (this.FLOOR_RES + 1) + j].z =
                this.snoise.noise(ipos / this.FLOOR_RES * this.noiseScale, j /
                    this.FLOOR_RES * this.noiseScale, this.noiseSeed) * (this.FLOOR_HT / 2);
            }
        }
    }
    this.floorGeometry.verticesNeedUpdate = true;
  }


  onWindowResize(): void {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  onDocumentMouseMove( event: MouseEvent ): void {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    this.mouseX = event.clientX - x;
    this.mouseY = event.clientY - y;
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( width, height );
  }

  render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    this.camera.position.x += ( this.mouseX - this.camera.position.x ) * .01;
    this.camera.position.y += ( - (this.mouseY * 0.3 ) + 600 - this.camera.position.y ) * .01;
    this.camera.position.z += ( - (this.mouseY * 0.3 ) + 800 - this.camera.position.z ) * .01;

    this.setWaves();
    this.count += 0.1;
    this.renderer.render(this.scene, this.camera);
  }

  animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();

      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();

        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

}
