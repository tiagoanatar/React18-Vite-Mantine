export default function UserAvatar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#clip0_693_12966)">
        <mask
          id="mask0_693_12966"
          style={{ maskType: 'alpha' }}
          width="20"
          height="20"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="10" fill="#F2F1F1" />
        </mask>
        <g mask="url(#mask0_693_12966)">
          <circle cx="10" cy="10" r="10" fill="#F2F1F1" />
          <circle cx="10" cy="6" r="3" fill="#C4C4C4" />
          <circle cx="10" cy="17" r="7" fill="#C4C4C4" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_693_12966">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
