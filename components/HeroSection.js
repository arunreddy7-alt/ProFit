import Image from 'next/image';
import Navbar from './Navbar';

function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/images/hero-background.jpg" 
          alt="Fitness tracking background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-0 left-0 size-full">
          <Navbar />
          <div className="px-5 mx-auto mt-52 max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm">
            <h1 className="text-9xl font-bold text-center text-white opacity-40 max-md:text-7xl max-sm:text-5xl">
              No Excuses, just Results
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
