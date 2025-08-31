import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <main className="font-inter flex flex-col w-full">
      {/* Hero */}
      <section className="flex flex-col md:flex-row py-12 md:py-20 gap-16 md:gap-8 text-left w-full justify-between items-center">
        <div className="flex flex-col gap-4 items-center sm:items-baseline">
          <h1 className="text-5xl">
            Laser-Engraved Wooden Gifts, Personalized with Care
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-fit">
            <Button asChild variant="mutedDefault" className="text-md">
              <Link href="/custom-order">Personalize Your Gift</Link>
            </Button>
            <Button className="text-md">
              <Link href="/shop">Shop All Items</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/it-is-well-sign.webp"
          alt="Hero Image"
          width={400}
          height={400}
          priority
        />
      </section>

      {/* Featured Collections */}
      <section className="bg-secondary w-screen -mx-[calc((100vw-100%)/2)] py-12 md:py-20">
        <div className="flex flex-col max-w-7xl mx-auto px-6 gap-16">
          <div className="flex flex-col gap-2 sm:flex-row w-full justify-between md:items-center">
            <h2 className="text-3xl underline decoration-accent-foreground/70 decoration-2">
              Featured Collections
            </h2>
            <Button asChild>
              <Link href="/shop/collections">
                View All Collections <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap lg:flex-row w-full gap-8 justify-center md:justify-between md:px-24">
            <Link href="/shop/collections/cards">
              <div className="flex flex-col items-center gap-4">
                <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
                  <Image
                    src="/teacher-beard-card.webp"
                    alt="Camping card thumbnail"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl">Cards</h3>
              </div>
            </Link>
            <Link href="/shop/collections/cards">
              <div className="flex flex-col items-center gap-4">
                <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
                  <Image
                    src="/teacher-beard-card.webp"
                    alt="Camping card thumbnail"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl">Cards</h3>
              </div>
            </Link>
            <Link href="/shop/collections/cards">
              <div className="flex flex-col items-center gap-4">
                <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
                  <Image
                    src="/teacher-beard-card.webp"
                    alt="Camping card thumbnail"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl">Cards</h3>
              </div>
            </Link>
            <Link href="/shop/collections/cards">
              <div className="flex flex-col items-center gap-4">
                <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
                  <Image
                    src="/teacher-beard-card.webp"
                    alt="Camping card thumbnail"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl">Cards</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="flex flex-col py-12 md:py-20 gap-12 md:gap-16">
        <div className="flex flex-col gap-2 sm:flex-row w-full justify-between md:items-center">
          <h2 className="text-3xl underline decoration-accent-foreground/70 decoration-2">
            Best Sellers
          </h2>
          <Button asChild variant="mutedDefault">
            <Link href="/shop/collections">
              Shop All Items <ArrowRight />
            </Link>
          </Button>
        </div>

        <Carousel className="mx-16">
          <CarouselContent>
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link href="/shop/puzzle_piece_card_id">
                <Card className="pt-0 overflow-hidden">
                  <CardContent className="flex px-0 justify-center items-center">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/puzzle_piece.webp"
                        alt="Puzzle piece"
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="flex-col items-baseline gap-2">
                    <p className="font-semibold w-full truncate">
                      Father&apos;s Day Puzzle Piece Gift Card
                    </p>
                    <p className="text-primary font-semibold">$24.00</p>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link href="/shop/puzzle_piece_card_id">
                <Card className="pt-0 overflow-hidden">
                  <CardContent className="flex px-0 justify-center items-center">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/camping-card.webp"
                        alt="Puzzle piece"
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="flex-col items-baseline gap-2">
                    <p className="font-semibold w-full truncate">
                      Camping Father&apos;s Day Card
                    </p>
                    <p className="text-primary font-semibold">$15.00</p>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link href="/shop/puzzle_piece_card_id">
                <Card className="pt-0 overflow-hidden">
                  <CardContent className="flex px-0 justify-center items-center">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/puzzle_piece.webp"
                        alt="Puzzle piece"
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="flex-col items-baseline gap-2">
                    <p className="font-semibold w-full truncate">
                      Father&apos;s Day Puzzle Piece Gift
                    </p>
                    <p className="text-primary font-semibold">$24.00</p>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link href="/shop/puzzle_piece_card_id">
                <Card className="pt-0 overflow-hidden">
                  <CardContent className="flex px-0 justify-center items-center">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/puzzle_piece.webp"
                        alt="Puzzle piece"
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="flex-col items-baseline gap-2">
                    <p className="font-semibold w-full truncate">
                      Father&apos;s Day Puzzle Piece Gift
                    </p>
                    <p className="text-primary font-semibold">$24.00</p>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link href="/shop/puzzle_piece_card_id">
                <Card className="pt-0 overflow-hidden">
                  <CardContent className="flex px-0 justify-center items-center">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/puzzle_piece.webp"
                        alt="Wooden puzzle piece father's day gift"
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="flex-col items-baseline gap-2">
                    <p className="font-semibold w-full truncate">
                      Father&apos;s Day Puzzle Piece Gift
                    </p>
                    <p className="text-primary font-semibold">$24.00</p>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link href="/shop/puzzle_piece_card_id">
                <Card className="pt-0 overflow-hidden">
                  <CardContent className="flex px-0 justify-center items-center">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/puzzle_piece.webp"
                        alt="Puzzle piece"
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="flex-col items-baseline gap-2">
                    <p className="font-semibold w-full truncate">
                      Father&apos;s Day Puzzle Piece Gift
                    </p>
                    <p className="text-primary font-semibold">$24.00</p>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="-left-16" />
          <CarouselNext className="-right-16" />
        </Carousel>
      </section>
    </main>
  );
}
