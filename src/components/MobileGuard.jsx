import donutImage from '@/assets/images/donut.png';

export default function MobileGuard() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-yellow-400 p-6 text-center md:hidden">
      <div className="mb-8 w-32 drop-shadow-xl">
        <img
          src={donutImage}
          alt="Spinning Donut"
          className="h-full w-full animate-spin object-contain"
          style={{ animationDuration: '3s' }}
        />
      </div>
      <h2 className="text-stroke-6 text-stroke-yellow-950 text-5xl font-bold text-yellow-500 uppercase">
        &ldquo;Ay, caramba&rdquo;
      </h2>
      <div className="mt-4 max-w-sm space-y-2">
        <p className="text-xl leading-tight font-black tracking-tighter text-yellow-950 uppercase font-stretch-condensed">
          This website works best on larger screens.
        </p>
        <p className="text-sm font-bold text-yellow-900/80 uppercase">
          Please switch to landscape mode <br /> or use a computer instead!
        </p>
      </div>

      <div className="mt-8 h-1.5 w-16 rounded-full bg-yellow-950/20" />
    </div>
  );
}
