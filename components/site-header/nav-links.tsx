"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <NavigationMenu
      viewport={false}
      className="flex flex-col md:flex-row justify-start md:justify-center"
    >
      <NavigationMenuList className="flex flex-col md:flex-row items-baseline justify-start">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent
            className={cn("ml-4 md:ml-0", mobile && "!shadow-none border-none")}
          >
            <ul className="grid w-[200px] gap-4 text-foreground">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/shop">Shop All Items</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/shop/collections">Collections</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/shop/custom-order">Custom Order</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/gallery" className={navigationMenuTriggerStyle()}>
              Gallery
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about" className={navigationMenuTriggerStyle()}>
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact-us" className={navigationMenuTriggerStyle()}>
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/faq" className={navigationMenuTriggerStyle()}>
              FAQ
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
