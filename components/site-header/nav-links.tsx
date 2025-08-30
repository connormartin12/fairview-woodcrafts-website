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

export default function NavLinks({
  className,
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <ul className={className}>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/shop/collections">Collections</Link>
        </li>
        <li>
          <Link href="/shop/custom-order">Custom Order</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    );
  }
  return (
    <NavigationMenu viewport={false} className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
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
