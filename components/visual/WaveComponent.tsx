const WaveComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 40"
      preserveAspectRatio="none"
      style={{
        height: "7vh",
        minHeight: 50,
      }}
      {...props}
    >
      <defs>
        <path
          id="a"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        />
      </defs>
      <g className="moving-waves">
        <use xlinkHref="#a" x={48} y={-1} fill="rgba(255,255,255,0.40" />
        <use xlinkHref="#a" x={48} y={3} fill="rgba(255,255,255,0.35)" />
        <use xlinkHref="#a" x={48} y={5} fill="rgba(255,255,255,0.25)" />
        <use xlinkHref="#a" x={48} y={8} fill="rgba(255,255,255,0.20)" />
        <use xlinkHref="#a" x={48} y={13} fill="rgba(255,255,255,0.15)" />
        <use xlinkHref="#a" x={48} y={16} fill="rgba(255,255,255,0.95" />
      </g>
    </svg>
  );
};

export default WaveComponent;
