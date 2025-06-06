export function Light() {
  return (
    <group>
      <directionalLight
        castShadow
        intensity={5}
        position={[5, 5, -8]}
        shadow-bias={-0.001}
        shadow-mapSize={2048}
      >
        <orthographicCamera
          args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]}
          attach="shadow-camera"
        />
      </directionalLight>
    </group>
  );
}
