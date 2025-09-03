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
import ContactUsForm from "@/components/forms/contact-us";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/utils/supabase/client";

export default async function Home() {
  const { data, error } = await supabase.from("products").select();
  console.log(data);

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
          <div className="flex flex-col gap-4 sm:flex-row w-full justify-between md:items-center">
            <h2 className="text-3xl">Featured Collections</h2>
            <Button asChild>
              <Link href="/shop/collections">
                View All Collections <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:flex-row w-full gap-12 justify-center md:justify-between md:px-24">
            <Link href="/shop/collections/cards">
              <div className="flex flex-col items-center gap-4">
                <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
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
                <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
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
                <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
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
                <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-full bg-secondary relative">
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
        <div className="flex flex-col gap-4 sm:flex-row w-full justify-between md:items-center">
          <h2 className="text-3xl">Best Sellers</h2>
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

      <section className="bg-secondary w-screen -mx-[calc((100vw-100%)/2)] py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto px-6 gap-12 md:gap-24 lg:gap-48">
          <div className="flex flex-col gap-8 md:basis-1/2">
            <h2 className="text-3xl">
              Don&apos;t See What You&apos;re Looking For?
            </h2>

            <div className="flex flex-col gap-4 font-[merriweather]">
              <p className="text-lg">
                Every piece we make is crafted with care and we know the perfect
                gift sometimes calls for something truly one of a kind.
              </p>
              <p className="text-lg">
                Browse our gallery of custom work for inspiration, start a
                custom order based on our popular options, or contact us to
                design something truly unique!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-6 w-full">
              <Button asChild variant="mutedDefault" className="basis-1/2">
                <Link href="/shop/collections">Browse Our Custom Work</Link>
              </Button>
              <Button asChild className="basis-1/2">
                <Link href="/shop/collections">Customize Your Gift</Link>
              </Button>
            </div>
          </div>

          <Separator className="md:hidden" />

          <div className="flex flex-col gap-4 md:gap-8 md:basis-1/2 -mt-2 md:mt-0">
            <h2 className="text-3xl">Contact Us</h2>
            <ContactUsForm />
          </div>
        </div>
      </section>
    </main>
  );
}
