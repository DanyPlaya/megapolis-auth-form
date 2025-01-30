import { SVGProps } from "react";
export const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M4 13c0-1.886 0-2.828.586-3.414S6.114 9 8 9h8c1.886 0 2.828 0 3.414.586S20 11.114 20 13v2c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879C4 19.243 4 17.828 4 15z"></path>
      <path
        strokeLinecap="round"
        d="M16 8V7a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v1"
      ></path>
    </g>
  </svg>
);
