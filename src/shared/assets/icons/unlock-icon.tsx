import { SVGProps } from "react";

export function UnlockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <rect width="14" height="10" x="5" y="10.989" rx="2"></rect>
        <path
          strokeLinecap="round"
          d="m15.5 8l-.008-1.742a1.5 1.5 0 0 0-1.5-1.494h-3.978a1.5 1.5 0 0 0-1.5 1.5v4.73"
        ></path>
      </g>
    </svg>
  );
}
