import { useAnimations } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RainModel = () => {
  const gltf = useLoader(GLTFLoader, "/assets/models/rain.glb");
  const modelRef = useRef();
  const { actions, mixer } = useAnimations(gltf.animations, modelRef);

  useEffect(() => {
    modelRef.current.position.z = -9;
    modelRef.current.position.y = -10.2;
    modelRef.current.position.x = -6;
    modelRef.current.rotation.x = 0.2;
  }, []);

  useEffect(() => {
    if (actions) {
      const keys = Object.keys(actions);
      actions[keys[0]].play();
    }
  }, [mixer]);

  return <primitive object={gltf.scene} scale={0.054} ref={modelRef} />;
};

export default RainModel;
