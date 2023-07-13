import { useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TornadoModel = () => {
  const gltf = useLoader(GLTFLoader, "/assets/models/tornado.gltf");
  const modelRef = useRef();

  const { actions, mixer } = useAnimations(gltf.animations, modelRef);

  useEffect(() => {
    modelRef.current.position.x = -4;
    modelRef.current.position.z = -5;
    modelRef.current.position.y = -2;
    modelRef.current.rotation.x = 0.3;
  }, []);

  useEffect(() => {
    if (actions) {
      const keys = Object.keys(actions);
      actions[keys[0]].play();
    }
  }, [mixer]);

  return <primitive object={gltf.scene} scale={0.04} ref={modelRef} />;
};

export default TornadoModel;
