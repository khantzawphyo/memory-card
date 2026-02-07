import { useTheme } from '@/contexts/ThemeContext';
import { CARD_THEMES } from '@/constants/themes';

function Card({ char, onClick, isFaceUp }) {
  const { theme } = useTheme();
  const cardStyle = CARD_THEMES[theme.cardVariant] || CARD_THEMES.classic;

  const ThemeIcon = cardStyle.icon;

  return (
    <button
      onClick={() => onClick(char.id)}
      className={`relative flex w-full flex-col overflow-hidden rounded-xl border-4 shadow-xl transition-all duration-700 active:scale-95 ${cardStyle.border} ${cardStyle.hoverBorder} ${cardStyle.backBg}`}
    >
      {!isFaceUp && (
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-4 transition-colors duration-700 ${cardStyle.backBg}`}
        >
          <div className="relative flex flex-col items-center">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/20 shadow-lg transition-all duration-700 sm:h-28 sm:w-28 ${cardStyle.starBg}`}
            >
              <ThemeIcon
                className={`text-6xl transition-colors duration-700 ${cardStyle.starIcon}`}
              />
            </div>

            <div className="mt-4 h-1.5 w-24 rounded-full bg-black/20" />

            <span
              className={`mt-2 text-center text-[10px] font-black tracking-widest uppercase transition-colors duration-700 ${cardStyle.textColor}`}
            >
              Memory Game
            </span>
          </div>
        </div>
      )}

      <div
        className={`m-1 overflow-hidden rounded-lg border-2 border-black/20 transition-colors duration-700 ${cardStyle.innerBg}`}
      >
        <div className="aspect-3/4 w-full overflow-hidden">
          <img
            src={char.image}
            alt={char.name}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              isFaceUp ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      <div className="shrink-0 py-3">
        <p
          className={`px-1 text-center font-bold tracking-tighter uppercase font-stretch-condensed transition-colors duration-700 ${cardStyle.textColor}`}
        >
          {isFaceUp ? char.name : <span className="invisible">Placeholder</span>}
        </p>
      </div>

      {isFaceUp && (
        <div
          className={`absolute top-3 right-3 flex size-8 items-center justify-center rounded-full border-2 border-black/20 shadow-sm transition-colors duration-700 ${cardStyle.starBg}`}
        >
          <ThemeIcon className={`text-sm transition-colors duration-700 ${cardStyle.starIcon}`} />
        </div>
      )}
    </button>
  );
}

export default Card;
