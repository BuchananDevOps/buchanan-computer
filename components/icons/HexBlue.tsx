import { FC } from "react"

const HexBlue: FC = () => {
  return (
    <div className="z-1 max-md:order-first">
      <div className="will-change-transform animate-pulse">
        <div
          className="relative h-small-icon w-small-icon overflow-hidden rounded-icon-glass bg-gradient-to-br from-white/5 to-black/5 p-md backdrop-blur"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 0.1) 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.075) -0.5px -0.5px 0px inset,",
          }}
        >
          <div className="relative inline-block rounded-icon shadow-lg shadow-black/25">
            <div
              className="absolute inset-1 rounded-full opacity-0"
              style={{
                boxShadow:
                  "rgba(161, 139, 245, 0.5) 24px -24px 88px, rgba(71, 183, 248, 0.5) -24px 24px 88px",
                opacity: "0",
              }}
            />
            <div
              className="relative h-24 w-24 overflow-hidden rounded-icon bg-gradient-to-br from-gray-800 to-gray-900"
              style={{
                boxShadow:
                  "inset 1px 1px 0 rgb(255 255 255 / 0.075), inset -1px -1px 2px rgb(0 0 0 / 0.95)",
              }}
            >
              <div
                className="absolute inset-2 rounded-full bg-gradient-to-br from-black/20 to-black/0"
                style={{
                  boxShadow:
                    "inset 0.5px 0.5px 0 rgb(255 255 255 / 0.15),0 0 3px 1px rgb(0 0 0 / 1),-2px -2px 6px rgb(255 255 255 / 0.15),1px 1px 1px 2px rgb(255 255 255 / 0.075),6px 6px 8px rgb(0 0 0 / 0.5)",
                }}
              />
              <div
                className="absolute inset-2 overflow-hidden rounded-full bg-gradient-to-br from-black to-black/75"
                style={{
                  boxShadow:
                    "-2px -2px 4px rgb(0 0 0 / 0.4), 2px 2px 4px rgb(255 255 255 / 0.06)",
                }}
              />
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  boxShadow:
                    " rgba(71, 183, 248, 0.6) 1px 1px 0px inset, rgba(71, 183, 248, 0.6) 0px 0px 6px",
                  opacity: " 0.6528",
                  transform: " rotate(62.4961deg) translateZ(0px),",
                }}
              />
              <div
                className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 to-black/0"
                style={{
                  boxShadow:
                    "inset 4px 4px 4px rgb(0 0 0 / 0.4), inset 28px 28px 1px -16px rgb(255 255 255 / 0.04)",
                }}
              />
              <div
                className="absolute inset-1 rounded-full"
                style={{
                  boxShadow:
                    " rgba(71, 183, 248, 0.15) -8px -8px 16px 16px inset, rgba(71, 183, 248, 0.4) 0px 0px 24px",
                  opacity: " 0",
                }}
              />
              <svg
                className="absolute inset-2"
                fill="none"
                height="80"
                viewBox="0 0 80 80"
                width="80"
              >
                <defs>
                  <radialGradient
                    fx="0.25"
                    fy="0.25"
                    id="hex-mesh-animated-gradient"
                  >
                    <stop offset="0%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="10%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.11249999999999999s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="20%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.22499999999999998s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="30%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.33749999999999997s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="40%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.44999999999999996s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="50%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.5625s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="60%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.6749999999999999s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="70%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.7875s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="80%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="0.8999999999999999s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                    <stop offset="90%" stopColor="transparent">
                      <animate
                        attributeName="stop-color"
                        begin="1.0125s"
                        dur="3"
                        repeatCount="indefinite"
                        values="transparent;#A18BF5;#47B7F8;transparent"
                      />
                    </stop>
                  </radialGradient>
                  <radialGradient
                    fx="0.25"
                    fy="0.25"
                    id="hex-mesh-stationary-gradient"
                  >
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity=".075" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <filter id="blur">
                    <feGaussianBlur stdDeviation=".5" />
                  </filter>
                  <filter id="blur2">
                    <feGaussianBlur stdDeviation="2" />
                  </filter>
                </defs>
                <path
                  d="M1 40C1 38.3059 1.10801 36.6371 1.31752 35M1 40L3 42M1 40C1 43.7282 1.52313 47.3342 2.5 50.7487M16 9.25695L14 
                13.5M16 9.25695C17.0285 8.4529 18.0984 7.69934 19.2059 7M16 9.25695C13.1581 11.4787 10.6321 14.0859 8.50065 17M14 13.5H16M14 
                13.5L9.5 17.5M16 13.5L21.5 10M16 13.5L14.5 18.5M21.5 10L23 7M21.5 10L25.5 11M23 7H19.2059M23 7L28.5 4.5M19.2059 7C22.1284 5.15457 
                25.3131 3.68665 28.6915 2.66474M28.5 4.5L32.5 5M28.5 4.5L28.6915 2.66474M32.5 5L32 8M32.5 5L38 3M32 8L25.5 11M32 8L38 9.5M25.5 
                11L24.5 16M24.5 16L18 20M24.5 16L30.5 18M18 20L14.5 18.5M18 20L17 27M14.5 18.5L10 22.5M9.5 17.5L7.5 22M9.5 17.5L8.50065 17M7.5 
                22L10 22.5M7.5 22L4 24.9736M10 22.5L8.50065 29M8.50065 17C6.70454 19.4557 5.18863 22.1292 4 24.9736M4 24.9736L3.5 30.5M4 24.9736C2.68218 
                28.1271 1.76664 31.4906 1.31752 35M8.50065 29L5 32.5M8.50065 29L11.5 31M5 32.5L3.5 30.5M5 32.5L4.5 39M3.5 30.5L1.31752 35M4.5 39L3 42M4.5 
                39L7.5 42.5M3 42L3.5 47.5M30.5 18L37.5 14.5M30.5 18L30 26M37.5 14.5L38 9.5M37.5 14.5L44.5 18M38 9.5L44 7.5M44 7.5L43.5 4.5M44 7.5L50.5 10M43.5 4.5L38 3M43.5 4.5L48.5 4M38 3L37.8367 1.05898M17 27L11.5 31M17 27L22.5 30M11.5 31V39M28.6915 2.66474C28.9598 2.58358 29.2293 2.50524 29.5 2.42975C32.0695 1.71315 34.7459 1.25307 37.5 1.07884C38.3266 1.02654 39.1602 1 40 1C42.5654 1 45.0729 1.2477 47.5 1.72047M48.5 4L47.5 1.72047M48.5 4L53.5 6M47.5 1.72047C50.7745 2.35832 53.9025 3.40587 56.8285 4.80758M53.5 6L55 9M53.5 6H57M55 9L50.5 10M55 9L61 12.5M50.5 10L51.5 15.5M51.5 15.5L44.5 18M51.5 15.5L58 19.5M44.5 18L45 25.5M30 26L22.5 30M30 26L37.5 29.5M22.5 30V38.5M11.5 39L7.5 42.5M11.5 39L16.5 42.5M7.5 42.5L8 49M16.5 42.5L22.5 38.5M16.5 42.5L16.75 50.7487M22.5 38.5L29.5 43M3.5 47.5L2.5 50.7487M3.5 47.5L6 51.5M2.5 50.7487C3.27725 53.4654 4.34173 56.0608 5.65851 58.5M6 51.5L8 49M6 51.5L7 57M8 49L12.5 53.5M16.75 50.7487L12.5 53.5M16.75 50.7487L23 55M12.5 53.5L13.5 60M29.5 43L37 38.5M29.5 43V51.5M37 38.5L37.5 29.5M37 38.5L45 43M37.5 29.5L45 25.5M45 25.5L52.5 30M58 19.5L59 26.5M58 19.5L62.5 17.5M59 26.5L52.5 30M59 26.5L65 31M52.5 30V38.5M45 43L52.5 38.5M45 43V51.5M52.5 38.5L59 43M61 12.5L62.5 17.5M61 12.5L64 12M62.5 17.5L68 21.5M57 6L56.8285 4.80758M57 6L62 9M56.8285 4.80758C59.3856 6.03257 61.7885 7.52804 64 9.25695M62 9L64 9.25695M62 9L64 12M64 9.25695C66.4098 11.1409 68.5925 13.302 70.5 15.6923M64 12L68.5 16M68.5 16L70.5 15.6923M68.5 16L70.5 20.5M70.5 15.6923C72.2929 17.939 73.8428 20.3881 75.1097 23M70.5 20.5L68 21.5M70.5 20.5L74 24.5M68 21.5L69 28M69 28L65 31M69 28L73 32.5M65 31L65.5 38.5M74 24.5L75.1097 23M74 24.5L75.1097 30M75.1097 23C76.3626 25.5826 77.3388 28.3243 78 31.1866M75.1097 30L73 32.5M75.1097 30L77 33.5M73 32.5L73.5 39M65.5 38.5L70 42.5M65.5 38.5L59 43M70 42.5L73.5 39M70 42.5L69.5 50M73.5 39L76 42M76 42L77.5 39M76 42L75.5 49M77.5 39L77 33.5M77.5 39L78.957 41.8476M77 33.5L78 31.1866M78 31.1866C78.6542 34.0188 79 36.969 79 40C79 40.6193 78.9856 41.2353 78.957 41.8476M78.957 41.8476C78.8066 45.0717 78.2648 48.1934 77.3779 51.1664M75.5 49L77.3779 51.1664M75.5 49L73 52.5M77.3779 51.1664C76.5015 54.1045 75.2881 56.8973 73.7825 59.5M7 57L5.65851 58.5M7 57L11 61M5.65851 58.5C7.08626 61.1448 8.81061 63.6058 10.787 65.8387M13.5 60L11 61M13.5 60L19 64M11 61L13 65.5M23 55L29.5 51.5M23 55L24 62M29.5 51.5L37.5 56M24 62L19 64M24 62L31 65.8387M19 64L20.5 68.5M13 65.5L10.787 65.8387M13 65.5L17.5 69M10.787 65.8387C12.9719 68.3071 15.4649 70.4965 18.2057 72.3468M17.5 69L20.5 68.5M17.5 69L19 72M20.5 68.5L26.5 72M19 72L18.2057 72.3468M19 72L24 74.5M18.2057 72.3468C22.8553 75.4857 28.218 77.6485 34 78.5413M26.5 72L28 75M26.5 72L31.5 71M28 75L24 74.5M28 75L33.5 77M24 74.5L25 76M31.5 71L31 65.8387M31.5 71L38 73.5M31 65.8387L37.5 63M38 73.5L38.5 76M38 73.5L43.5 71M38.5 76L33.5 77M38.5 76L43.5 77M33.5 77L34 78.5413M34 78.5413C35.9558 78.8433 37.9596 79 40 79C41.0094 79 42.0099 78.9616 43 78.8863M37.5 63V56M37.5 63L44 65.8387M37.5 56L45 51.5M45 51.5L52 55M52 55L51 62M52 55L58.5 51.5M51 62L44 65.8387M51 62L56 64M44 65.8387L43.5 71M43.5 71L49.5 72M43.5 77L43 78.8863M43.5 77L49 75M43 78.8863C46.481 78.6215 49.8343 77.8997 53 76.7808M49.5 72L49 75M49.5 72L54.5 69.5M49 75L54 75.5M59 43L58.5 51.5M58.5 51.5L64 54M64 54L62.5 61.75M64 54L69.5 50M62.5 61.75L56 64M62.5 61.75L67 62M56 64L54.5 69.5M54.5 69.5L60.5 70M69.5 50L73 52.5M73 52.5L71.5 59M54 75.5L53 76.7808M54 75.5L59.5 72.8691M53 76.7808C55.831 75.7802 58.5119 74.462 61 72.8691M60.5 70L59.5 72.8691M60.5 70L65.5 67.5M59.5 72.8691H61M71.5 59L67 62M71.5 59L73.7825 59.5M67 62L65.5 67.5M73.7825 59.5C71.9343 62.695 69.6458 65.6035 67 68.1426M65.5 67.5L67 68.1426M61 72.8691C63.1537 71.4902 65.163 69.9054 67 68.1426"
                  stroke="url(#hex-mesh-stationary-gradient)"
                  strokeWidth="0.5"
                />
                <path
                  d="M1 40C1 38.3059 1.10801 36.6371 1.31752 35M1 40L3 42M1 40C1 43.7282 1.52313 47.3342 2.5 50.7487M16 9.25695L14 13.5M16 9.25695C17.0285 8.4529 18.0984 7.69934 19.2059 7M16 9.25695C13.1581 11.4787 10.6321 14.0859 8.50065 17M14 13.5H16M14 13.5L9.5 17.5M16 13.5L21.5 10M16 13.5L14.5 18.5M21.5 10L23 7M21.5 10L25.5 11M23 7H19.2059M23 7L28.5 4.5M19.2059 7C22.1284 5.15457 25.3131 3.68665 28.6915 2.66474M28.5 4.5L32.5 5M28.5 4.5L28.6915 2.66474M32.5 5L32 8M32.5 5L38 3M32 8L25.5 11M32 8L38 9.5M25.5 11L24.5 16M24.5 16L18 20M24.5 16L30.5 18M18 20L14.5 18.5M18 20L17 27M14.5 18.5L10 22.5M9.5 17.5L7.5 22M9.5 17.5L8.50065 17M7.5 22L10 22.5M7.5 22L4 24.9736M10 22.5L8.50065 29M8.50065 17C6.70454 19.4557 5.18863 22.1292 4 24.9736M4 24.9736L3.5 30.5M4 24.9736C2.68218 28.1271 1.76664 31.4906 1.31752 35M8.50065 29L5 32.5M8.50065 29L11.5 31M5 32.5L3.5 30.5M5 32.5L4.5 39M3.5 30.5L1.31752 35M4.5 39L3 42M4.5 39L7.5 42.5M3 42L3.5 47.5M30.5 18L37.5 14.5M30.5 18L30 26M37.5 14.5L38 9.5M37.5 14.5L44.5 18M38 9.5L44 7.5M44 7.5L43.5 4.5M44 7.5L50.5 10M43.5 4.5L38 3M43.5 4.5L48.5 4M38 3L37.8367 1.05898M17 27L11.5 31M17 27L22.5 30M11.5 31V39M28.6915 2.66474C28.9598 2.58358 29.2293 2.50524 29.5 2.42975C32.0695 1.71315 34.7459 1.25307 37.5 1.07884C38.3266 1.02654 39.1602 1 40 1C42.5654 1 45.0729 1.2477 47.5 1.72047M48.5 4L47.5 1.72047M48.5 4L53.5 6M47.5 1.72047C50.7745 2.35832 53.9025 3.40587 56.8285 4.80758M53.5 6L55 9M53.5 6H57M55 9L50.5 10M55 9L61 12.5M50.5 10L51.5 15.5M51.5 15.5L44.5 18M51.5 15.5L58 19.5M44.5 18L45 25.5M30 26L22.5 30M30 26L37.5 29.5M22.5 30V38.5M11.5 39L7.5 42.5M11.5 39L16.5 42.5M7.5 42.5L8 49M16.5 42.5L22.5 38.5M16.5 42.5L16.75 50.7487M22.5 38.5L29.5 43M3.5 47.5L2.5 50.7487M3.5 47.5L6 51.5M2.5 50.7487C3.27725 53.4654 4.34173 56.0608 5.65851 58.5M6 51.5L8 49M6 51.5L7 57M8 49L12.5 53.5M16.75 50.7487L12.5 53.5M16.75 50.7487L23 55M12.5 53.5L13.5 60M29.5 43L37 38.5M29.5 43V51.5M37 38.5L37.5 29.5M37 38.5L45 43M37.5 29.5L45 25.5M45 25.5L52.5 30M58 19.5L59 26.5M58 19.5L62.5 17.5M59 26.5L52.5 30M59 26.5L65 31M52.5 30V38.5M45 43L52.5 38.5M45 43V51.5M52.5 38.5L59 43M61 12.5L62.5 17.5M61 12.5L64 12M62.5 17.5L68 21.5M57 6L56.8285 4.80758M57 6L62 9M56.8285 4.80758C59.3856 6.03257 61.7885 7.52804 64 9.25695M62 9L64 9.25695M62 9L64 12M64 9.25695C66.4098 11.1409 68.5925 13.302 70.5 15.6923M64 12L68.5 16M68.5 16L70.5 15.6923M68.5 16L70.5 20.5M70.5 15.6923C72.2929 17.939 73.8428 20.3881 75.1097 23M70.5 20.5L68 21.5M70.5 20.5L74 24.5M68 21.5L69 28M69 28L65 31M69 28L73 32.5M65 31L65.5 38.5M74 24.5L75.1097 23M74 24.5L75.1097 30M75.1097 23C76.3626 25.5826 77.3388 28.3243 78 31.1866M75.1097 30L73 32.5M75.1097 30L77 33.5M73 32.5L73.5 39M65.5 38.5L70 42.5M65.5 38.5L59 43M70 42.5L73.5 39M70 42.5L69.5 50M73.5 39L76 42M76 42L77.5 39M76 42L75.5 49M77.5 39L77 33.5M77.5 39L78.957 41.8476M77 33.5L78 31.1866M78 31.1866C78.6542 34.0188 79 36.969 79 40C79 40.6193 78.9856 41.2353 78.957 41.8476M78.957 41.8476C78.8066 45.0717 78.2648 48.1934 77.3779 51.1664M75.5 49L77.3779 51.1664M75.5 49L73 52.5M77.3779 51.1664C76.5015 54.1045 75.2881 56.8973 73.7825 59.5M7 57L5.65851 58.5M7 57L11 61M5.65851 58.5C7.08626 61.1448 8.81061 63.6058 10.787 65.8387M13.5 60L11 61M13.5 60L19 64M11 61L13 65.5M23 55L29.5 51.5M23 55L24 62M29.5 51.5L37.5 56M24 62L19 64M24 62L31 65.8387M19 64L20.5 68.5M13 65.5L10.787 65.8387M13 65.5L17.5 69M10.787 65.8387C12.9719 68.3071 15.4649 70.4965 18.2057 72.3468M17.5 69L20.5 68.5M17.5 69L19 72M20.5 68.5L26.5 72M19 72L18.2057 72.3468M19 72L24 74.5M18.2057 72.3468C22.8553 75.4857 28.218 77.6485 34 78.5413M26.5 72L28 75M26.5 72L31.5 71M28 75L24 74.5M28 75L33.5 77M24 74.5L25 76M31.5 71L31 65.8387M31.5 71L38 73.5M31 65.8387L37.5 63M38 73.5L38.5 76M38 73.5L43.5 71M38.5 76L33.5 77M38.5 76L43.5 77M33.5 77L34 78.5413M34 78.5413C35.9558 78.8433 37.9596 79 40 79C41.0094 79 42.0099 78.9616 43 78.8863M37.5 63V56M37.5 63L44 65.8387M37.5 56L45 51.5M45 51.5L52 55M52 55L51 62M52 55L58.5 51.5M51 62L44 65.8387M51 62L56 64M44 65.8387L43.5 71M43.5 71L49.5 72M43.5 77L43 78.8863M43.5 77L49 75M43 78.8863C46.481 78.6215 49.8343 77.8997 53 76.7808M49.5 72L49 75M49.5 72L54.5 69.5M49 75L54 75.5M59 43L58.5 51.5M58.5 51.5L64 54M64 54L62.5 61.75M64 54L69.5 50M62.5 61.75L56 64M62.5 61.75L67 62M56 64L54.5 69.5M54.5 69.5L60.5 70M69.5 50L73 52.5M73 52.5L71.5 59M54 75.5L53 76.7808M54 75.5L59.5 72.8691M53 76.7808C55.831 75.7802 58.5119 74.462 61 72.8691M60.5 70L59.5 72.8691M60.5 70L65.5 67.5M59.5 72.8691H61M71.5 59L67 62M71.5 59L73.7825 59.5M67 62L65.5 67.5M73.7825 59.5C71.9343 62.695 69.6458 65.6035 67 68.1426M65.5 67.5L67 68.1426M61 72.8691C63.1537 71.4902 65.163 69.9054 67 68.1426"
                  filter="url(#blur2)"
                  stroke="url(#hex-mesh-animated-gradient)"
                  strokeWidth="0.5"
                />
                <path
                  d="M1 40C1 38.3059 1.10801 36.6371 1.31752 35M1 40L3 42M1 40C1 43.7282 1.52313 47.3342 2.5 50.7487M16 9.25695L14 13.5M16 9.25695C17.0285 8.4529 18.0984 7.69934 19.2059 7M16 9.25695C13.1581 11.4787 10.6321 14.0859 8.50065 17M14 13.5H16M14 13.5L9.5 17.5M16 13.5L21.5 10M16 13.5L14.5 18.5M21.5 10L23 7M21.5 10L25.5 11M23 7H19.2059M23 7L28.5 4.5M19.2059 7C22.1284 5.15457 25.3131 3.68665 28.6915 2.66474M28.5 4.5L32.5 5M28.5 4.5L28.6915 2.66474M32.5 5L32 8M32.5 5L38 3M32 8L25.5 11M32 8L38 9.5M25.5 11L24.5 16M24.5 16L18 20M24.5 16L30.5 18M18 20L14.5 18.5M18 20L17 27M14.5 18.5L10 22.5M9.5 17.5L7.5 22M9.5 17.5L8.50065 17M7.5 22L10 22.5M7.5 22L4 24.9736M10 22.5L8.50065 29M8.50065 17C6.70454 19.4557 5.18863 22.1292 4 24.9736M4 24.9736L3.5 30.5M4 24.9736C2.68218 28.1271 1.76664 31.4906 1.31752 35M8.50065 29L5 32.5M8.50065 29L11.5 31M5 32.5L3.5 30.5M5 32.5L4.5 39M3.5 30.5L1.31752 35M4.5 39L3 42M4.5 39L7.5 42.5M3 42L3.5 47.5M30.5 18L37.5 14.5M30.5 18L30 26M37.5 14.5L38 9.5M37.5 14.5L44.5 18M38 9.5L44 7.5M44 7.5L43.5 4.5M44 7.5L50.5 10M43.5 4.5L38 3M43.5 4.5L48.5 4M38 3L37.8367 1.05898M17 27L11.5 31M17 27L22.5 30M11.5 31V39M28.6915 2.66474C28.9598 2.58358 29.2293 2.50524 29.5 2.42975C32.0695 1.71315 34.7459 1.25307 37.5 1.07884C38.3266 1.02654 39.1602 1 40 1C42.5654 1 45.0729 1.2477 47.5 1.72047M48.5 4L47.5 1.72047M48.5 4L53.5 6M47.5 1.72047C50.7745 2.35832 53.9025 3.40587 56.8285 4.80758M53.5 6L55 9M53.5 6H57M55 9L50.5 10M55 9L61 12.5M50.5 10L51.5 15.5M51.5 15.5L44.5 18M51.5 15.5L58 19.5M44.5 18L45 25.5M30 26L22.5 30M30 26L37.5 29.5M22.5 30V38.5M11.5 39L7.5 42.5M11.5 39L16.5 42.5M7.5 42.5L8 49M16.5 42.5L22.5 38.5M16.5 42.5L16.75 50.7487M22.5 38.5L29.5 43M3.5 47.5L2.5 50.7487M3.5 47.5L6 51.5M2.5 50.7487C3.27725 53.4654 4.34173 56.0608 5.65851 58.5M6 51.5L8 49M6 51.5L7 57M8 49L12.5 53.5M16.75 50.7487L12.5 53.5M16.75 50.7487L23 55M12.5 53.5L13.5 60M29.5 43L37 38.5M29.5 43V51.5M37 38.5L37.5 29.5M37 38.5L45 43M37.5 29.5L45 25.5M45 25.5L52.5 30M58 19.5L59 26.5M58 19.5L62.5 17.5M59 26.5L52.5 30M59 26.5L65 31M52.5 30V38.5M45 43L52.5 38.5M45 43V51.5M52.5 38.5L59 43M61 12.5L62.5 17.5M61 12.5L64 12M62.5 17.5L68 21.5M57 6L56.8285 4.80758M57 6L62 9M56.8285 4.80758C59.3856 6.03257 61.7885 7.52804 64 9.25695M62 9L64 9.25695M62 9L64 12M64 9.25695C66.4098 11.1409 68.5925 13.302 70.5 15.6923M64 12L68.5 16M68.5 16L70.5 15.6923M68.5 16L70.5 20.5M70.5 15.6923C72.2929 17.939 73.8428 20.3881 75.1097 23M70.5 20.5L68 21.5M70.5 20.5L74 24.5M68 21.5L69 28M69 28L65 31M69 28L73 32.5M65 31L65.5 38.5M74 24.5L75.1097 23M74 24.5L75.1097 30M75.1097 23C76.3626 25.5826 77.3388 28.3243 78 31.1866M75.1097 30L73 32.5M75.1097 30L77 33.5M73 32.5L73.5 39M65.5 38.5L70 42.5M65.5 38.5L59 43M70 42.5L73.5 39M70 42.5L69.5 50M73.5 39L76 42M76 42L77.5 39M76 42L75.5 49M77.5 39L77 33.5M77.5 39L78.957 41.8476M77 33.5L78 31.1866M78 31.1866C78.6542 34.0188 79 36.969 79 40C79 40.6193 78.9856 41.2353 78.957 41.8476M78.957 41.8476C78.8066 45.0717 78.2648 48.1934 77.3779 51.1664M75.5 49L77.3779 51.1664M75.5 49L73 52.5M77.3779 51.1664C76.5015 54.1045 75.2881 56.8973 73.7825 59.5M7 57L5.65851 58.5M7 57L11 61M5.65851 58.5C7.08626 61.1448 8.81061 63.6058 10.787 65.8387M13.5 60L11 61M13.5 60L19 64M11 61L13 65.5M23 55L29.5 51.5M23 55L24 62M29.5 51.5L37.5 56M24 62L19 64M24 62L31 65.8387M19 64L20.5 68.5M13 65.5L10.787 65.8387M13 65.5L17.5 69M10.787 65.8387C12.9719 68.3071 15.4649 70.4965 18.2057 72.3468M17.5 69L20.5 68.5M17.5 69L19 72M20.5 68.5L26.5 72M19 72L18.2057 72.3468M19 72L24 74.5M18.2057 72.3468C22.8553 75.4857 28.218 77.6485 34 78.5413M26.5 72L28 75M26.5 72L31.5 71M28 75L24 74.5M28 75L33.5 77M24 74.5L25 76M31.5 71L31 65.8387M31.5 71L38 73.5M31 65.8387L37.5 63M38 73.5L38.5 76M38 73.5L43.5 71M38.5 76L33.5 77M38.5 76L43.5 77M33.5 77L34 78.5413M34 78.5413C35.9558 78.8433 37.9596 79 40 79C41.0094 79 42.0099 78.9616 43 78.8863M37.5 63V56M37.5 63L44 65.8387M37.5 56L45 51.5M45 51.5L52 55M52 55L51 62M52 55L58.5 51.5M51 62L44 65.8387M51 62L56 64M44 65.8387L43.5 71M43.5 71L49.5 72M43.5 77L43 78.8863M43.5 77L49 75M43 78.8863C46.481 78.6215 49.8343 77.8997 53 76.7808M49.5 72L49 75M49.5 72L54.5 69.5M49 75L54 75.5M59 43L58.5 51.5M58.5 51.5L64 54M64 54L62.5 61.75M64 54L69.5 50M62.5 61.75L56 64M62.5 61.75L67 62M56 64L54.5 69.5M54.5 69.5L60.5 70M69.5 50L73 52.5M73 52.5L71.5 59M54 75.5L53 76.7808M54 75.5L59.5 72.8691M53 76.7808C55.831 75.7802 58.5119 74.462 61 72.8691M60.5 70L59.5 72.8691M60.5 70L65.5 67.5M59.5 72.8691H61M71.5 59L67 62M71.5 59L73.7825 59.5M67 62L65.5 67.5M73.7825 59.5C71.9343 62.695 69.6458 65.6035 67 68.1426M65.5 67.5L67 68.1426M61 72.8691C63.1537 71.4902 65.163 69.9054 67 68.1426"
                  filter="url(#blur)"
                  stroke="url(#hex-mesh-animated-gradient)"
                  strokeWidth="0.5"
                />
                <path
                  d="M1 40C1 38.3059 1.10801 36.6371 1.31752 35M1 40L3 42M1 40C1 43.7282 1.52313 47.3342 2.5 50.7487M16 9.25695L14 13.5M16 9.25695C17.0285 8.4529 18.0984 7.69934 19.2059 7M16 9.25695C13.1581 11.4787 10.6321 14.0859 8.50065 17M14 13.5H16M14 13.5L9.5 17.5M16 13.5L21.5 10M16 13.5L14.5 18.5M21.5 10L23 7M21.5 10L25.5 11M23 7H19.2059M23 7L28.5 4.5M19.2059 7C22.1284 5.15457 25.3131 3.68665 28.6915 2.66474M28.5 4.5L32.5 5M28.5 4.5L28.6915 2.66474M32.5 5L32 8M32.5 5L38 3M32 8L25.5 11M32 8L38 9.5M25.5 11L24.5 16M24.5 16L18 20M24.5 16L30.5 18M18 20L14.5 18.5M18 20L17 27M14.5 18.5L10 22.5M9.5 17.5L7.5 22M9.5 17.5L8.50065 17M7.5 22L10 22.5M7.5 22L4 24.9736M10 22.5L8.50065 29M8.50065 17C6.70454 19.4557 5.18863 22.1292 4 24.9736M4 24.9736L3.5 30.5M4 24.9736C2.68218 28.1271 1.76664 31.4906 1.31752 35M8.50065 29L5 32.5M8.50065 29L11.5 31M5 32.5L3.5 30.5M5 32.5L4.5 39M3.5 30.5L1.31752 35M4.5 39L3 42M4.5 39L7.5 42.5M3 42L3.5 47.5M30.5 18L37.5 14.5M30.5 18L30 26M37.5 14.5L38 9.5M37.5 14.5L44.5 18M38 9.5L44 7.5M44 7.5L43.5 4.5M44 7.5L50.5 10M43.5 4.5L38 3M43.5 4.5L48.5 4M38 3L37.8367 1.05898M17 27L11.5 31M17 27L22.5 30M11.5 31V39M28.6915 2.66474C28.9598 2.58358 29.2293 2.50524 29.5 2.42975C32.0695 1.71315 34.7459 1.25307 37.5 1.07884C38.3266 1.02654 39.1602 1 40 1C42.5654 1 45.0729 1.2477 47.5 1.72047M48.5 4L47.5 1.72047M48.5 4L53.5 6M47.5 1.72047C50.7745 2.35832 53.9025 3.40587 56.8285 4.80758M53.5 6L55 9M53.5 6H57M55 9L50.5 10M55 9L61 12.5M50.5 10L51.5 15.5M51.5 15.5L44.5 18M51.5 15.5L58 19.5M44.5 18L45 25.5M30 26L22.5 30M30 26L37.5 29.5M22.5 30V38.5M11.5 39L7.5 42.5M11.5 39L16.5 42.5M7.5 42.5L8 49M16.5 42.5L22.5 38.5M16.5 42.5L16.75 50.7487M22.5 38.5L29.5 43M3.5 47.5L2.5 50.7487M3.5 47.5L6 51.5M2.5 50.7487C3.27725 53.4654 4.34173 56.0608 5.65851 58.5M6 51.5L8 49M6 51.5L7 57M8 49L12.5 53.5M16.75 50.7487L12.5 53.5M16.75 50.7487L23 55M12.5 53.5L13.5 60M29.5 43L37 38.5M29.5 43V51.5M37 38.5L37.5 29.5M37 38.5L45 43M37.5 29.5L45 25.5M45 25.5L52.5 30M58 19.5L59 26.5M58 19.5L62.5 17.5M59 26.5L52.5 30M59 26.5L65 31M52.5 30V38.5M45 43L52.5 38.5M45 43V51.5M52.5 38.5L59 43M61 12.5L62.5 17.5M61 12.5L64 12M62.5 17.5L68 21.5M57 6L56.8285 4.80758M57 6L62 9M56.8285 4.80758C59.3856 6.03257 61.7885 7.52804 64 9.25695M62 9L64 9.25695M62 9L64 12M64 9.25695C66.4098 11.1409 68.5925 13.302 70.5 15.6923M64 12L68.5 16M68.5 16L70.5 15.6923M68.5 16L70.5 20.5M70.5 15.6923C72.2929 17.939 73.8428 20.3881 75.1097 23M70.5 20.5L68 21.5M70.5 20.5L74 24.5M68 21.5L69 28M69 28L65 31M69 28L73 32.5M65 31L65.5 38.5M74 24.5L75.1097 23M74 24.5L75.1097 30M75.1097 23C76.3626 25.5826 77.3388 28.3243 78 31.1866M75.1097 30L73 32.5M75.1097 30L77 33.5M73 32.5L73.5 39M65.5 38.5L70 42.5M65.5 38.5L59 43M70 42.5L73.5 39M70 42.5L69.5 50M73.5 39L76 42M76 42L77.5 39M76 42L75.5 49M77.5 39L77 33.5M77.5 39L78.957 41.8476M77 33.5L78 31.1866M78 31.1866C78.6542 34.0188 79 36.969 79 40C79 40.6193 78.9856 41.2353 78.957 41.8476M78.957 41.8476C78.8066 45.0717 78.2648 48.1934 77.3779 51.1664M75.5 49L77.3779 51.1664M75.5 49L73 52.5M77.3779 51.1664C76.5015 54.1045 75.2881 56.8973 73.7825 59.5M7 57L5.65851 58.5M7 57L11 61M5.65851 58.5C7.08626 61.1448 8.81061 63.6058 10.787 65.8387M13.5 60L11 61M13.5 60L19 64M11 61L13 65.5M23 55L29.5 51.5M23 55L24 62M29.5 51.5L37.5 56M24 62L19 64M24 62L31 65.8387M19 64L20.5 68.5M13 65.5L10.787 65.8387M13 65.5L17.5 69M10.787 65.8387C12.9719 68.3071 15.4649 70.4965 18.2057 72.3468M17.5 69L20.5 68.5M17.5 69L19 72M20.5 68.5L26.5 72M19 72L18.2057 72.3468M19 72L24 74.5M18.2057 72.3468C22.8553 75.4857 28.218 77.6485 34 78.5413M26.5 72L28 75M26.5 72L31.5 71M28 75L24 74.5M28 75L33.5 77M24 74.5L25 76M31.5 71L31 65.8387M31.5 71L38 73.5M31 65.8387L37.5 63M38 73.5L38.5 76M38 73.5L43.5 71M38.5 76L33.5 77M38.5 76L43.5 77M33.5 77L34 78.5413M34 78.5413C35.9558 78.8433 37.9596 79 40 79C41.0094 79 42.0099 78.9616 43 78.8863M37.5 63V56M37.5 63L44 65.8387M37.5 56L45 51.5M45 51.5L52 55M52 55L51 62M52 55L58.5 51.5M51 62L44 65.8387M51 62L56 64M44 65.8387L43.5 71M43.5 71L49.5 72M43.5 77L43 78.8863M43.5 77L49 75M43 78.8863C46.481 78.6215 49.8343 77.8997 53 76.7808M49.5 72L49 75M49.5 72L54.5 69.5M49 75L54 75.5M59 43L58.5 51.5M58.5 51.5L64 54M64 54L62.5 61.75M64 54L69.5 50M62.5 61.75L56 64M62.5 61.75L67 62M56 64L54.5 69.5M54.5 69.5L60.5 70M69.5 50L73 52.5M73 52.5L71.5 59M54 75.5L53 76.7808M54 75.5L59.5 72.8691M53 76.7808C55.831 75.7802 58.5119 74.462 61 72.8691M60.5 70L59.5 72.8691M60.5 70L65.5 67.5M59.5 72.8691H61M71.5 59L67 62M71.5 59L73.7825 59.5M67 62L65.5 67.5M73.7825 59.5C71.9343 62.695 69.6458 65.6035 67 68.1426M65.5 67.5L67 68.1426M61 72.8691C63.1537 71.4902 65.163 69.9054 67 68.1426"
                  stroke="url(#hex-mesh-animated-gradient)"
                  strokeWidth="0.5"
                />
              </svg>
              <div
                className="absolute inset-1 rounded-full"
                style={{
                  boxShadow:
                    " rgba(170, 214, 251, 0.22) 0px -3px 0px -2px, rgba(170, 214, 251, 0.28) 0px -6px 6px -6px",
                  opacity: " 0.346895",
                  transform: "rotate(72.5589deg) translateZ(0px)",
                }}
              />
              <div
                className="absolute inset-1 rounded-full"
                style={{
                  boxShadow:
                    " rgba(170, 214, 251, 0.22) 0px -3px 0px -2px, rgba(170, 214, 251, 0.28) 0px -6px 6px -6px",
                  opacity: "0.346895",
                  transform: "rotate(-162.559deg) translateZ(0px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HexBlue
