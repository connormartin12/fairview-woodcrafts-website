import NavLinks from "./nav-links";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 bg-background z-99 flex flex-col items-center w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="flex items-center justify-between py-1 max-w-7xl w-full mx-auto px-6 lg:px-2">
        <Link href="/">
          <Image
            src="/fw_logo.webp"
            width={70}
            height={70}
            alt="Fairview Woodcrafts Logo"
          />
        </Link>
        <NavLinks />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="!h-[32px] !w-[32px]" strokeWidth={2} />
          </Link>
        </Button>
      </div>
      <span className="w-full h-[2px] bg-border" />
    </header>
  );
}
