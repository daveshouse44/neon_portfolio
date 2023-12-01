import type { SVGProps } from "react";

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m8.825 12l1.475-1.475q.3-.3.3-.7t-.3-.7q-.3-.3-.712-.3t-.713.3L6.7 11.3q-.15.15-.213.325T6.425 12q0 .2.062.375t.213.325l2.175 2.175q.3.3.713.3t.712-.3q.3-.3.3-.7t-.3-.7L8.825 12Zm6.35 0L13.7 13.475q-.3.3-.3.7t.3.7q.3.3.713.3t.712-.3L17.3 12.7q.15-.15.213-.325t.062-.375q0-.2-.062-.375T17.3 11.3l-2.175-2.175q-.15-.15-.337-.225t-.376-.075q-.187 0-.375.075t-.337.225q-.3.3-.3.7t.3.7L15.175 12ZM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"
      ></path>
    </svg>
  );
}
