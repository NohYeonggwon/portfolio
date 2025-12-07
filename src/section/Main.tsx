import { useEffect, useState } from "react";

const LINES = [
  '" 이유 있는 선택 "',
  '" 사실을 기반으로 "',
  '" 틀을 짜고 움직이며 "',
  '" 정확히, 완성까지 간다. "',
];

export default function Main() {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>(["", "", "", ""]);

  useEffect(() => {
    // 모든 라인 타이핑 끝나면 멈춤
    if (currentLine >= LINES.length) return;

    const fullText = LINES[currentLine];
    const currentText = typedLines[currentLine];

    // 한 줄이 다 써졌으면 잠깐 쉰 다음 다음 줄로
    if (currentText.length === fullText.length) {
      const delayTimer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(delayTimer);
    }

    // 한 글자씩 추가
    const timer = setTimeout(() => {
      setTypedLines((prev) => {
        const copy = [...prev];
        copy[currentLine] = fullText.slice(0, currentText.length + 1);
        return copy;
      });
    }, 80);

    return () => clearTimeout(timer);
  }, [currentLine, typedLines]);

  return (
    <>
      <section className="relative w-full min-h-screen bg-[#FBFBF4] pt-65">
        <div className=" flex flex-col items-center gap-20">
          <div>
            <svg
              width="601"
              height="80"
              viewBox="0 0 601 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M600.961 1.32666V56.9211C600.961 60.3843 600.351 63.5527 599.132 66.4263C597.985 69.2263 596.3 71.621 594.077 73.6105C591.926 75.6 589.309 77.1473 586.225 78.2526C583.142 79.2842 579.7 79.7999 575.9 79.7999C568.227 79.7999 562.275 77.8473 558.045 73.9421C553.886 69.9632 551.233 64.7684 550.085 58.3579L565.359 55.1527C565.932 58.4685 567.008 61.1579 568.585 63.2211C570.235 65.2842 572.673 66.3158 575.9 66.3158C578.624 66.3158 580.74 65.4316 582.246 63.6632C583.823 61.8211 584.612 59.0211 584.612 55.2632V14.9213H559.873V1.32666H600.961Z"
                fill="#3B59BD"
              />
              <path
                d="M521.839 14.9213V78.4736H505.705V14.9213H484.085V1.32666H543.458V14.9213H521.839Z"
                fill="#3B59BD"
              />
              <path
                d="M448.095 79.7996C441.785 79.7996 436.299 78.7312 431.638 76.5943C426.978 74.4575 423.213 71.547 420.345 67.8628L429.702 57.2523C432.427 60.3471 435.403 62.6313 438.63 64.1049C441.928 65.5786 445.263 66.3154 448.633 66.3154C452.505 66.3154 455.445 65.4312 457.453 63.6628C459.461 61.8944 460.464 59.3523 460.464 56.0366C460.464 53.3102 459.676 51.2471 458.098 49.8471C456.592 48.4471 454.011 47.4524 450.354 46.8629L442.502 45.5366C435.762 44.3577 430.886 41.8156 427.874 37.9103C424.862 33.9314 423.356 29.1051 423.356 23.4315C423.356 15.9894 425.723 10.2421 430.455 6.18944C435.188 2.06315 441.821 0 450.354 0C456.162 0 461.217 0.921045 465.52 2.76314C469.822 4.60524 473.3 7.11049 475.953 10.2789L466.81 20.7788C464.803 18.4946 462.436 16.7262 459.712 15.4736C456.987 14.1473 453.903 13.4841 450.461 13.4841C443.219 13.4841 439.598 16.542 439.598 22.6578C439.598 25.3104 440.387 27.2999 441.964 28.6262C443.613 29.9525 446.267 30.9472 449.924 31.6104L457.775 33.0472C463.871 34.1525 468.567 36.5103 471.866 40.1209C475.164 43.7314 476.814 48.5945 476.814 54.7102C476.814 58.3208 476.204 61.6734 474.985 64.7681C473.766 67.7891 471.938 70.4417 469.499 72.7259C467.061 74.9365 464.05 76.668 460.464 77.9206C456.951 79.1733 452.828 79.7996 448.095 79.7996Z"
                fill="#3B59BD"
              />
              <path
                d="M360.583 78.4736V66.2053H376.717V13.595H360.583V1.32666H408.985V13.595H392.851V66.2053H408.985V78.4736H360.583Z"
                fill="#3B59BD"
              />
              <path
                d="M320.27 40.2642V51.5974H286.027V40.2642H320.27Z"
                fill="#3B59BD"
              />
              <path
                d="M197.354 78.4736V66.2053H213.487V13.595H197.354V1.32666H245.755V13.595H229.621V66.2053H245.755V78.4736H197.354Z"
                fill="#3B59BD"
              />
              <path
                d="M165.127 14.9213V78.4736H148.994V14.9213H127.374V1.32666H186.747V14.9213H165.127Z"
                fill="#3B59BD"
              />
              <path
                d="M68.5811 1.32666H94.9332C102.319 1.32666 107.948 3.16876 111.82 6.85295C115.764 10.5371 117.736 15.5476 117.736 21.8845C117.736 26.3055 116.66 29.8423 114.509 32.4949C112.43 35.0739 109.418 36.9528 105.474 38.1317V38.7949C110.135 39.9738 113.72 42.037 116.23 44.9843C118.811 47.9317 120.102 52.0211 120.102 57.2527C120.102 63.7369 118.094 68.8947 114.079 72.7263C110.135 76.5579 104.578 78.4736 97.407 78.4736H68.5811V1.32666ZM92.4593 66.8684C96.3314 66.8684 99.1638 66.2053 100.957 64.879C102.749 63.5527 103.646 61.1211 103.646 57.5843V54.379C103.646 50.8422 102.749 48.4106 100.957 47.0843C99.1638 45.758 96.3314 45.0949 92.4593 45.0949H84.2848V66.8684H92.4593ZM90.4157 34.0423C94.2161 34.0423 96.9768 33.416 98.6978 32.1633C100.419 30.837 101.279 28.4792 101.279 25.0897V21.7739C101.279 18.3845 100.419 16.0634 98.6978 14.8108C96.9768 13.5582 94.2161 12.9319 90.4157 12.9319H84.2848V34.0423H90.4157Z"
                fill="#3B59BD"
              />
              <path
                d="M42.1634 44.1001L43.0238 22.5476H42.0558L28.0731 62.2263L14.0903 22.5476H13.1223L13.9828 44.1001V78.4736H0V1.32666H19.0381L28.2882 27.3002H29.1487L38.3988 1.32666H56.1461V78.4736H42.1634V44.1001Z"
                fill="#3B59BD"
              />
            </svg>
          </div>
          {/* ISTJ 타이핑 영역 */}
          <div className="text-4xl flex flex-col items-center gap-12 fade-in-up">
            <p>
              <strong>I:</strong> {typedLines[0]}
              {currentLine === 0 &&
                typedLines[0].length !== LINES[0].length && (
                  <span className="cursor-blink">|</span>
                )}
            </p>
            <p>
              <strong>S:</strong> {typedLines[1]}
              {currentLine === 1 &&
                typedLines[1].length !== LINES[1].length && (
                  <span className="cursor-blink">|</span>
                )}
            </p>
            <p>
              <strong>T:</strong> {typedLines[2]}
              {currentLine === 2 &&
                typedLines[2].length !== LINES[2].length && (
                  <span className="cursor-blink">|</span>
                )}
            </p>
            <p>
              <strong>J:</strong> {typedLines[3]}
              {currentLine === 3 &&
                typedLines[3].length !== LINES[3].length && (
                  <span className="cursor-blink">|</span>
                )}
            </p>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-2">
            <span>Scroll Down</span>
            <span className="relative w-8 h-12 border border-[#A09999] rounded-full">
              <span className="w-1 h-1 absolute left-1/2 top-1/4 -translate-x-1/2 rounded-full bg-[#A09999] animate-[scrollBounce_1.6s_ease-in-out_infinite]"></span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
