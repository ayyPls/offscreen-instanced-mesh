import { Box3, Color } from 'three';
import { POSITIONS } from './positions';

const BoxHelper = () => {
  const pointsBoundingBoxGeometry = new Box3().setFromArray(POSITIONS);
  const pointsBoundingBoxColor = new Color().setHSL(POSITIONS.length / 5, 1, 0.5);

  return <box3Helper args={[pointsBoundingBoxGeometry, pointsBoundingBoxColor]} />;
};

export default BoxHelper;
