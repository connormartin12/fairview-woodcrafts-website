"use client";

import { useEffect, useRef, useState } from "react";
import NavLinks from "./nav-links";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useBreakPoint from "@/lib/use-breakpoint";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";

export default function SiteHeader() {
  const isDesktop = useBreakPoint(768);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Using observer ensures that the header height is updated if the header is resized
    if (headerRef.current) {
      const observer = new ResizeObserver(([entry]) => {
        setHeaderHeight(entry.contentRect.height);
      });
      observer.observe(headerRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 bg-background z-99 flex flex-col items-center w-screen -mx-[calc((100vw-100%)/2)]"
    >
      <div className="flex items-center justify-between py-1 max-w-7xl w-full mx-auto px-6">
        <Link href="/">
          <Image
            src="/fw_logo.webp"
            width={isDesktop ? 70 : 40}
            height={isDesktop ? 70 : 40}
            alt="Fairview Woodcrafts Logo"
          />
        </Link>

        {isDesktop && <NavLinks />}

        <div className="flex items-center gap-1 md:gap-6">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart
                className={clsx(
                  "!h-[24px] !w-[24px]",
                  isDesktop && "!h-[32px] !w-[32px]"
                )}
                strokeWidth={2}
              />
            </Link>
          </Button>

          {!isDesktop && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu className="!h-[24px] !w-[24px]" strokeWidth={2} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                style={{ marginTop: headerHeight }}
                className="p-4"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Title</SheetTitle>
                  <SheetDescription>Description</SheetDescription>
                </SheetHeader>
                <NavLinks mobile />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
      <Separator className="shadow-xs" />
    </header>
  );
}
