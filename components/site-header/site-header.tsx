"use client";

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

export default function SiteHeader() {
  const isDesktop = useBreakPoint(768);

  return (
    <header className="sticky top-0 bg-background z-99 flex flex-col items-center w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="flex items-center justify-between py-1 max-w-7xl w-full mx-auto px-6">
        <Link href="/">
          <Image
            src="/fw_logo.webp"
            width={70}
            height={70}
            alt="Fairview Woodcrafts Logo"
          />
        </Link>

        {isDesktop && <NavLinks />}

        <div className="flex items-center gap-6">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart className="!h-[32px] !w-[32px]" strokeWidth={2} />
            </Link>
          </Button>

          {!isDesktop && (
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="!h-[32px] !w-[32px]" strokeWidth={2} />
              </SheetTrigger>
              <SheetContent side="top" className="h-full">
                <SheetHeader className="display:none">
                  <SheetTitle>Title</SheetTitle>
                  <SheetDescription>Description</SheetDescription>
                </SheetHeader>
                <NavLinks mobile />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
      <span className="w-full h-[2px] bg-border" />
    </header>
  );
}
