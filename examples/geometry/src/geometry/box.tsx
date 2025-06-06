import { type Vector3Tuple } from "three";

function Box({
  color,
  position,
  rotation,
  scale,
  size = 1,
}: {
  color?: "red" | "green" | "blue";
  position?: Vector3Tuple | number;
  rotation?: Vector3Tuple;
  scale?: Vector3Tuple | number;
  /**
   * @min 1
   * @max 2
   */
  size?: number;
}) {
  const ok = {};
  return (
    <group scale={scale} visible={true}>
      <mesh
        {...ok}
        name="hello-world"
        onClick={() => {}}
        position={position}
        rotation={rotation}
        userData={{ hello: true }}
        visible={true}
      >
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} key={color} />
      </mesh>
    </group>
  );
}

export default Box;
