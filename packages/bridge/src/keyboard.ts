/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */

export interface KeyboardEventObject {
  altKey: boolean;
  code: string;
  ctrlKey: boolean;
  isComposing: boolean;
  key: string;
  keyCode: number;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
}

export type KeyboardEvents = "keydown" | "keyup";

export function createKeyboardEventForwarder(
  callback: (eventName: KeyboardEvents, data: KeyboardEventObject) => void,
  {
    capture = false,
    predicate = () => true,
  }: {
    capture?: boolean;
    predicate?: (e: KeyboardEvent) => boolean | "stop-propagation";
  } = {},
) {
  function createCallback(eventName: KeyboardEvents) {
    return (e: KeyboardEvent) => {
      if (e.target === e.currentTarget) {
        // This event is a synthetic event so we skip forwarding it.
        return;
      }

      const result = predicate(e);

      if (result) {
        if (result === "stop-propagation") {
          e.stopPropagation();
        }

        callback(eventName, {
          altKey: e.altKey,
          code: e.code,
          ctrlKey: e.ctrlKey,
          isComposing: e.isComposing,
          key: e.key,
          keyCode: e.keyCode, // keyCode is needed for Windows support.
          location: e.location,
          metaKey: e.metaKey,
          repeat: e.repeat,
          shiftKey: e.shiftKey,
        });
      }
    };
  }

  const keydown = createCallback("keydown");
  const keyup = createCallback("keyup");

  window.addEventListener("keydown", keydown, { capture });
  window.addEventListener("keyup", keyup, { capture });

  return () => {
    window.removeEventListener("keydown", keydown, { capture });
    window.removeEventListener("keyup", keyup, { capture });
  };
}
