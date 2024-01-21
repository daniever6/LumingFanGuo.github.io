
import { Suspense,useEffect,useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader"

const Computers = () => {

  const computer = useGLTF('./desktop_pc/scene.gltf');
  useEffect(() => {
    console.log('Model Loaded:', computer);
  }, [computer]);
  return (
    
    <mesh>
      <hemisphereLight intensity={1} skyColor = "white" groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive 
      object = {computer.scene}
      scale ={0.75}
      position = {[0,-3.25,-1.5]}
      rotation ={[-0.01,-0.2,-0.1]} >
        </primitive>
    </mesh>
  )
}

const ComputersCanvas = ()=>{

    console.log('canvas loaded');
  
  return (
    <Canvas 
      frameLoop ="demand"
      shadows
      camera ={{ position:[20,3,5],fov:25}}
      gl ={{preserveDrawingBuffer:true}}
      >
          <OrbitControls
            enableZoom ={false}
            maxPolarAngle = {Math.PI / 2}
            minPolarAngle = {Math.PI / 2}
          />
          <Computers />
      <Preload all />
      
        
    </Canvas>
  )
}

export default ComputersCanvas