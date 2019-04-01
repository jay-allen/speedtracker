export default ({extended}) => (
  <svg className="waves" width="100%" viewBox="0 0 1000 161" version="1.1">
    <g transform="translate(-12.000000, 0.000000)">
      <g transform="translate(0.426806, 0.429849)">
        {extended ? (
          <>
            <path d="M1026.57324,146.519371 L1026.57324,75.9568696 C1026.57324,75.9568696 830.5849,128.617028 745.983337,128.617028 C661.381775,128.617028 431.858349,58.9646824 257.299756,58.9646824 C82.7411619,58.9646824 2.5731931,107.879704 2.5731931,107.879704 L2.5731931,153.120934 L1026.57324,146.519371 Z" fill="#DD4B1A"></path>
            <path d="M1026.57316,157.577964 L1037.90917,104.92562 C1037.90917,104.92562 1026.57323,86.9646824 789.956031,86.9646824 C553.338827,86.9646824 449.314531,151.011557 354.428656,151.011557 C259.542781,151.011557 81.1292661,131.314124 2.57319382,93.8904637 C1.77660152,96.8071624 2.57319394,104.92562 2.57319394,104.92562 L2.57319393,157.577964 L1026.57316,157.577964 Z" fill="#F56416"></path>
          </>
        ) : ''}

        <path d="M1026.57307,159.284995 L1026.57307,108.222495 C1026.57307,108.222495 904.495067,137.284995 730.487254,137.284995 C556.479442,137.284995 401.987254,106.796714 249.409129,106.796714 C96.8310044,106.796714 2.57319189,130.687339 2.57319189,130.690146 L2.57319189,159.284995 L1026.57307,159.284995 Z" fill="#ffffff"></path>
      </g>
    </g>

    <style jsx>{`
      .waves {
        bottom: -5px;
        left: 0;
        pointer-events: none;
        position: absolute;
      }
    `}</style>
  </svg>  
)