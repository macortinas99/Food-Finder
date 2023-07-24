import Image from "next/image"
import HeroHeader from "../components/HeroHeader"
import SellingPointCarousel from "../components/SellingPointCarousel"

export default function Home() {
  return (
    <div>
      <HeroHeader />
      {/* Unique selling proposition*/}
      <div className="font-Libre text-lg text-center font-bold">
        <h1 className="text-2xl mb-12">
          Unearth Extraordinary Flavors: Your Culinary Adventure Awaits!
        </h1>
        <SellingPointCarousel />
      </div>
    </div>
  )
}
