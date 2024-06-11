interface SVGprops {
  className: string;
}

export const Logo = ({ className }: SVGprops) => (  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={256}
    height={256}
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    className={className}
  >
    <defs />
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 71.996 29.366 c -0.14 -1.52 -1.415 -2.683 -2.942 -2.683 H 45.756 h -1.513 H 20.946 c -1.527 0 -2.802 1.163 -2.942 2.683 l -5.288 57.409 C 12.557 88.506 13.92 90 15.659 90 h 28.585 h 1.513 h 28.585 c 1.739 0 3.101 -1.494 2.942 -3.225 L 71.996 29.366 z M 28.512 40.837 c -2.339 0 -4.242 -1.903 -4.242 -4.242 c 0 -2.339 1.903 -4.242 4.242 -4.242 c 2.339 0 4.242 1.903 4.242 4.242 C 32.754 38.934 30.851 40.837 28.512 40.837 z M 61.488 40.837 c -2.339 0 -4.242 -1.903 -4.242 -4.242 c 0 -2.339 1.903 -4.242 4.242 -4.242 c 2.339 0 4.242 1.903 4.242 4.242 C 65.73 38.934 63.827 40.837 61.488 40.837 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(231,78,58)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 61.488 37.606 c -0.559 0 -1.011 -0.453 -1.011 -1.011 V 17.499 c 0 -8.534 -6.942 -15.477 -15.477 -15.477 c -8.534 0 -15.477 6.943 -15.477 15.477 v 19.096 c 0 0.558 -0.453 1.011 -1.011 1.011 s -1.011 -0.453 -1.011 -1.011 V 17.499 C 27.501 7.85 35.351 0 45 0 s 17.499 7.85 17.499 17.499 v 19.096 C 62.499 37.154 62.047 37.606 61.488 37.606 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(64,89,107)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 51.607 76.477 c -0.368 0 -0.737 -0.089 -1.078 -0.268 l -5.384 -2.831 c -0.091 -0.047 -0.199 -0.047 -0.289 0 l -5.385 2.83 c -0.785 0.413 -1.717 0.347 -2.435 -0.176 c -0.717 -0.521 -1.07 -1.388 -0.92 -2.261 l 1.028 -5.995 c 0.018 -0.101 -0.016 -0.204 -0.09 -0.276 L 32.7 63.255 c -0.635 -0.619 -0.859 -1.528 -0.584 -2.371 c 0.274 -0.843 0.989 -1.445 1.866 -1.572 L 40 58.437 c 0.103 -0.015 0.19 -0.079 0.236 -0.171 l 2.691 -5.453 c 0.393 -0.795 1.187 -1.289 2.074 -1.289 s 1.681 0.494 2.073 1.289 l 2.691 5.453 c 0.046 0.092 0.133 0.156 0.234 0.17 l 6.02 0.876 c 0.877 0.127 1.592 0.729 1.866 1.572 s 0.051 1.752 -0.584 2.371 L 52.945 67.5 c -0.073 0.072 -0.107 0.175 -0.09 0.275 l 1.027 5.996 c 0.15 0.872 -0.201 1.738 -0.918 2.26 C 52.56 76.326 52.085 76.477 51.607 76.477 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(242,242,242)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </g>
  </svg>
)


export const Cart = ({ className }: SVGprops) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 92 92"
    id="cart"
    className={className}
  >
    <path d="M91.8 27.3L81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z" />
  </svg>
);



export const DropDown = ({ className }: SVGprops) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 30"
    x="0px"
    y="0px"
    className={className}
  >
    <path d="M6.08,7.2H17.92a1,1,0,0,1,.78,1.63l-5.92,7.4a1,1,0,0,1-1.56,0L5.3,8.83A1,1,0,0,1,6.08,7.2Z" />
  </svg>
)