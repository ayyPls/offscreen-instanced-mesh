import { createInstances } from '@react-three/drei';
import { POSITIONS } from './positions';

function sliceArrayIntoGroups<T>(arr: Array<T>, size: number) {
  let step: number = 0;
  let sliceArr = [];
  const len = arr.length;
  while (step < len) {
    sliceArr.push(arr.slice(step, (step += size)));
  }
  return sliceArr;
}

const CubeInstances = () => {
  const [CubeInstances, Cube] = createInstances();
  const cubeInstancesPositions = sliceArrayIntoGroups(POSITIONS, 3);

  return (
    <CubeInstances>
      <boxGeometry />
      <meshStandardMaterial color={'pink'} />
      {cubeInstancesPositions.map(([x, y, z], index) => (
        <Cube key={index} position={[x, y, z]} />
      ))}
    </CubeInstances>
  );
};

export default CubeInstances;
