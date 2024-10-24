import { BufferGeometry, Float32BufferAttribute, PointsMaterial } from 'three';
import { POSITIONS } from './positions';

const pointsMaterial = new PointsMaterial({ size: 1, color: 0x00ffff });

const PointsCloud = () => {
  const pointsGeometry = new BufferGeometry().setAttribute('position', new Float32BufferAttribute(POSITIONS, 3));

  return <points args={[pointsGeometry, pointsMaterial]} />;
};

export default PointsCloud;
