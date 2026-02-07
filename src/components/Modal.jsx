import Button from './Button';

function Modal({ isOpen, title, message, onRestart, onExit, hideButtons }) {
  if (!isOpen) return null;

  return (
    <div className="animate-in fade-in fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-sm duration-300">
      <div className="flex max-w-md flex-col items-center gap-6 rounded-3xl border-8 border-yellow-800 bg-yellow-100 p-10 text-center shadow-2xl">
        <h3 className="text-stroke-9 text-stroke-yellow-950 text-6xl font-black text-yellow-400 uppercase italic">
          {title}
        </h3>

        <p className="text-xl font-black tracking-tight text-gray-800 uppercase">{message}</p>

        {!hideButtons && (
          <div className="mt-2 flex gap-4">
            <Button shape="rect" variant="primary" size="md" onClick={onRestart}>
              Try Again
            </Button>

            <Button shape="rect" variant="danger" size="md" onClick={onExit}>
              Menu
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
