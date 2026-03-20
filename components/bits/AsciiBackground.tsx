'use client';

export const AsciiBackground = () => {
  const asciiLines = [
    "  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ",
    "  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ",
    "  @@@@@                                      @@@@@  ",
    "  @@@@@  //// HELLO WORLD                    @@@@@  ",
    "  @@@@@  const developer = {                 @@@@@  ",
    "  @@@@@    type: 'Full Stack',               @@@@@  ",
    "  @@@@@    status: 'System ready_            @@@@@  ",
    "  @@@@@  };                                  @@@@@  ",
    "  @@@@@                                      @@@@@  ",
    "  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ",
    "  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ",
  ];

  // Repeat for a larger texture field
  const repeatedText = Array(10).fill(asciiLines).flat().join('\n');

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03] select-none text-brand-green font-jetbrains text-xs whitespace-pre leading-none tracking-widest flex items-center justify-center">
      <div className="animate-[pulse_10s_ease-in-out_infinite]">
        {repeatedText}
      </div>
    </div>
  );
};
