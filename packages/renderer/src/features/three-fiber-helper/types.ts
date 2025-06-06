/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */

export type ThreeHelper =
  | "cameraHelper"
  | "directionalLightHelper"
  | "hemisphereLightHelper"
  | "pointLightHelper"
  | "spotLightHelper";

export type SupportedElements =
  | "ambientLight"
  | "directionalLight"
  | "hemisphereLight"
  | "orthographicCamera"
  | "perspectiveCamera"
  | "pointLight"
  | "rectAreaLight"
  | "spotLight"
  | "XROrigin";
