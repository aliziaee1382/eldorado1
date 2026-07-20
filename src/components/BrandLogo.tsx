import React from 'react';

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function BrandLogo({ className = 'w-11 h-11', iconOnly = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Red Sofa SVG Icon based on the Eldorado logo */}
      <svg 
        viewBox="0 0 272 197" 
        className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0.000000,197.000000) scale(0.100000,-0.100000)" fill="#E22329" stroke="none">
          <path d="M420 1728 c0 -130 11 -163 73 -212 l39 -31 251 -5 c239 -5 254 -6 300 -29 34 -16 53 -34 67 -62 19 -36 20 -60 20 -381 0 -189 4 -349 8 -356 7 -9 56 -12 213 -10 l204 3 3 555 c2 530 1 556 -17 586 -32 52 -56 54 -635 54 l-526 0 0 -112z"/>
          <path d="M189 1400 c-24 -12 -41 -31 -48 -51 -14 -41 -15 -1076 -1 -1113 5 -14 24 -35 42 -46 32 -20 47 -20 451 -18 l419 3 23 27 c34 40 37 92 33 648 -2 379 -6 500 -16 517 -29 52 -40 53 -469 53 -373 -1 -400 -2 -434 -20z"/>
          <path d="M1659 988 c-4 -212 11 -269 85 -315 38 -25 51 -27 201 -33 88 -4 172 -12 186 -18 38 -15 88 -71 99 -112 5 -19 10 -104 10 -188 l0 -152 173 2 172 3 3 390 c2 415 1 428 -46 465 -24 19 -42 20 -453 20 l-429 0 -1 -62z"/>
          <path d="M1218 557 c-42 -35 -48 -58 -48 -184 0 -131 15 -174 66 -193 40 -16 853 -13 884 3 44 22 60 70 60 182 0 119 -12 167 -47 195 -25 19 -38 20 -457 20 l-431 0 -27 -23z"/>
        </g>
      </svg>
    </div>
  );
}
