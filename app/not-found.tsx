"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2 className="text-3xl my-6">404 - Page not found</h2>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </>
  );
}
