import { Avatar } from '@chakra-ui/react'
export default function() {
  return (
    <div className="Navbar">
      <div className="UserInfos">
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <div>
          <span className="Name"> SAIDA Haithem</span>
          <span className="Email">h_saida@estin.dz</span>
        </div>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.863281 0.899902L1.61328 0.149902L6.00078 4.57491L10.3883 0.149902L11.1383 0.899902L6.00078 6.03741L0.863281 0.899902Z"
            fill="#495057"
          />
        </svg>
      </div>

    </div>
  );
}