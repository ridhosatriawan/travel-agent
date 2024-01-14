function Arrow({ fill = "#B9B9B9" }: { fill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        fill={fill}
        d="M20 11.5H7.83l5.59-5.59L12 4.5l-8 8 8 8 1.41-1.41-5.58-5.59H20v-2z"
      ></path>
    </svg>
  );
}

export default Arrow;
