import { LumaSplatsSemantics, LumaSplatsThree } from "@lumaai/luma-web";
import { extend, type Object3DNode } from "@react-three/fiber";

extend({ LumaSplats: LumaSplatsThree });

declare module "@react-three/fiber" {
  interface ThreeElements {
    lumaSplats: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>;
  }
}

export function Scene() {
  return (
    <>
      <lumaSplats
        position={[-1, 0, 0]}
        scale={0.5}
        semanticsMask={LumaSplatsSemantics.FOREGROUND}
        source="https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67"
      />
    </>
  );
}
