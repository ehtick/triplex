/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */
declare interface Window {
  triplex: {
    env: {
      mode: "webxr" | "default";
    };
    preload: {
      reactThreeFiber: boolean;
    };
  };
}
