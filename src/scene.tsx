import { Detailed, OrbitControls } from '@react-three/drei';
import CubeInstances from './CubeInstances';
import PointsCloud from './PointsCloud';
import BoxHelper from './BoxHelper';

const Scene = () => {
  return (
    <>
      <ambientLight />
      <color attach="background" args={['#EFEFEF']} />
      <Detailed distances={[0, 30, 60]}>
        <CubeInstances />
        <PointsCloud />
        <BoxHelper />
      </Detailed>
      <OrbitControls />
    </>
  );
};

export default Scene;
