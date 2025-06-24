"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Home() {
  const images = ["/hero_images/hero_image_1.jpg", "/hero_images/hero_image_2.jpg", "/hero_images/hero_image_3.jpg"];

  return (
    <div className="mx-auto">
      <div className="container">
        <div className="flex items-center justify-center text-black">
          <Carousel
            className="w-full py-2"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative p-1 flex gap-6 items-stretch justify-between h-[600px]">
                    <div className="flex-1 h-full">
                      <Image
                        src={src}
                        alt={`Ảnh minh họa ${index + 1}`}
                        className="rounded-3xl object-cover w-full h-full rounded-none"
                        width={626}
                        height={409}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden"/>
            <CarouselNext className="hidden"/>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
