import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  // const handleWheel = (e) => {
  //   e.preventDefault();

  //   const fov = e.target.camera.fov + e.deltaY * -0.05;

  //   e.target.camera.fov = THREE.MathUtils.clamp(fov, 10, 75);
  //   e.target.camera.updateProjectionMatrix();
  // };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 2], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
