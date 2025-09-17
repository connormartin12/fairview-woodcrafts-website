import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  SiFacebook,
  SiInstagram,
  SiPinterest,
} from "@icons-pack/react-simple-icons";
import NewsletterForm from "@/components/forms/newsletter";

export default function SiteFooter() {
  return (
    <footer className="relative flex flex-col w-full justify-center pb-4 gap-4 mt-auto">
      <Separator className="min-w-screen -mx-[calc((100vw-100%)/2)]" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 my-4">
        <section className="flex flex-col gap-2">
          <h4>Shop</h4>
          <div className="text-sm flex flex-col gap-1 *:hover:underline">
            <Link href="/">Home</Link>
            <Link href="/shop/all">Shop All</Link>
            <Link href="/shop/collections">Shop Collections</Link>
            <Link href="/shop/custom-order">Custom Order</Link>
            <Link href="/gallery">View Our Gallery</Link>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h4>Company</h4>
          <div className="text-sm flex flex-col gap-1 *:hover:underline">
            <Link href="/about">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h4>Customer Service</h4>
          <div className="text-sm flex flex-col gap-1 *:hover:underline">
            <Link href="/faq/#">Shipping & Returns</Link>
            <Link href="/faq/#">Order Tracking</Link>
            <Link href="/faq/#">Gift Options</Link>
          </div>
        </section>
        <section className="flex flex-col gap-2 sm:col-start-3 md:col-start-4">
          <h4>Follow Us</h4>
          <div className="text-sm flex gap-2">
            <Link
              href="https://www.facebook.com/fairviewwoodcrafts"
              target="_blank"
            >
              <SiFacebook className="!h-[20px]" />
            </Link>
            <Link href="#" target="_blank">
              <SiInstagram className="!h-[20px]" />
            </Link>
            <Link href="#" target="_blank">
              <SiPinterest className="!h-[20px]" />
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-6 col-span-2 lg:col-span-2 sm:col-start-1 sm:row-start-2 lg:row-start-1 lg:col-start-5">
          <div className="flex flex-col gap-2">
            <h4>Be the First to Know</h4>
            <p className="text-sm">
              Stay up to date on our latest handcrafted gifts and seasonal
              deals.
            </p>
          </div>
          <NewsletterForm />
        </section>
      </div>
      <Separator />
      <p className="text-center text-sm">
        Copyright &copy; 2025 Fairview Woodcrafts. All rights reserved.
      </p>
    </footer>
  );
}
