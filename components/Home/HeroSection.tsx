import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className="card-cta sm:flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-6 max-w-lg sm:order-2 md:order-1">
        <h2>Get Interview-Ready with AI-Powered Practive &amp; feedback</h2>

        <p className="text-lg">
          Practice on real interview questions &amp; get instant feedback
        </p>

        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>

      <Image
        src="/robot.png"
        alt="robo-dude"
        width={400}
        height={400}
        className="max-sm:hidden sm:order-1 md:order-2"
      />
    </section>
  );
};

export default HeroSection;
