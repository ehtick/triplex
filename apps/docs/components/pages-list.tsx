/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */
import Link from "next/link";
import { useRouter } from "next/router";
import { getPagesUnderRoute } from "nextra/context";
import { cn } from "../util/cn";
import { friendlyDate } from "../util/date";

export function PagesList({
  route,
  variant = "list",
}: {
  route?: string;
  variant?: "list" | "grid";
}) {
  const { route: nativeRoute } = useRouter();
  const pages = [nativeRoute, route]
    .filter((str): str is string => !!str)
    .flatMap((route) => getPagesUnderRoute(route))
    .filter((page) => page.route !== route && page.route !== nativeRoute)
    .sort((pageA, pageB) => {
      if (pageA.kind === "MdxPage" && pageB.kind === "MdxPage") {
        return pageB.frontMatter?.order - pageA.frontMatter?.order;
      }

      return 0;
    });

  if (pages.length === 0) {
    return null;
  }

  return (
    <div
      className={cn([
        variant === "list" && "mt-6 flex flex-col gap-10",
        variant === "grid" && "my-14 grid grid-cols-2 gap-6",
      ])}
    >
      {pages.map(
        (page) =>
          page.kind === "MdxPage" && (
            <Link
              className={cn([
                "group flex flex-col",
                variant === "grid" &&
                  "border-neutral justify-center gap-1 border px-6 py-5",
              ])}
              href={page.route}
              key={page.route}
            >
              {page.frontMatter?.date && (
                <time className="text-subtlest text-sm">
                  {friendlyDate(page.frontMatter.date)}
                </time>
              )}
              <div className="text-default inline-flex flex-wrap items-center gap-1 text-xl font-medium">
                <span className="group-hover:underline">
                  {page.frontMatter?.title || page.meta?.title || page.name}
                </span>
                {page.frontMatter?.app && (
                  <div
                    className="text-subtlest bg-neutral inline-block rounded px-1 py-0.5 text-xs font-normal"
                    title={`Only available in ${page.frontMatter.app}.`}
                  >
                    {page.frontMatter.app}
                  </div>
                )}
              </div>
              {page.frontMatter?.description && (
                <div className="text-subtlest text-base">
                  {page.frontMatter?.description}
                </div>
              )}
            </Link>
          ),
      )}
    </div>
  );
}
