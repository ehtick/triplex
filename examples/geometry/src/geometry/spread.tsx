import { type Vector3Tuple } from "three";

export function ThisSpreadProps(props: { position: Vector3Tuple }) {
  return (
    <group {...props}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh>
        <cylinderGeometry
          args={[undefined, undefined, 2, undefined, undefined, false]}
        />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}
