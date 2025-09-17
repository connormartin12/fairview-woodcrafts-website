"use client";

import { useEffect, useRef, useState } from "react";
import NavLinks from "./nav-links";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
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
      <div className="flex items-center justify-between py-2 max-w-7xl w-full mx-auto px-6">
        <Link href="/">
          <div className="relative w-[40px] md:w-[60px]">
            <AspectRatio ratio={1}>
              <Image
                src="/fw-logo.webp"
                alt="The fairview woodcrafts company logo"
                priority
                fill
                sizes="(max-width: 768px) 40px, 60px"
                className="object-contain"
              />
            </AspectRatio>
          </div>
        </Link>

        <NavLinks className="hidden md:flex" />

        <div className="flex items-center gap-1 md:gap-6">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart
                className={cn("!h-[24px] !w-[24px] md:!h-[32px] md:!w-[32px]")}
                strokeWidth={1.8}
              />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost">
                <Menu className="!h-[24px] !w-[24px]" strokeWidth={1.8} />
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
        </div>
      </div>
      <Separator className="shadow-xs" />
    </header>
  );
}
