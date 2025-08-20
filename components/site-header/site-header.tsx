import NavLinks from "./nav-links";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <div className="flex w-full items-center justify-between py-2">
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
  );
}
