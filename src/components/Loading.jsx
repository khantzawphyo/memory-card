import loadingGif from '@/assets/images/loading.gif';

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-transparent p-6">
      <div className="relative">
        <img
          src={loadingGif}
          alt="Loading Graphic"
          className="h-64 w-64 object-contain drop-shadow-2xl"
        />
      </div>

      <div className="text-center">
        <h1 className="text-stroke-6 text-stroke-yellow-950 text-4xl font-bold text-yellow-400 uppercase drop-shadow-[-2px_2px_0px_#432004] select-none">
          LOADING...
        </h1>
        <p className="mt-2 text-xl font-bold text-yellow-950">
          "D'oh! Getting everything ready..."
        </p>
      </div>
    </div>
  );
}

export default Loading;
