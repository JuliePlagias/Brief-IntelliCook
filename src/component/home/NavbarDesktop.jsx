import { Outlet } from 'react-router-dom'

export default function NavbarDesktop() {
  const path = '/assets/images/icons/'
  return (
    <>
      <div className='navBarDesktop'>
        <img
          className='logo'
          src={`${path}logo.png`}
          alt='Intelli Cook Logo'
        ></img>
        <div className='icons'>
          <svg
            id='heart'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3'
            />
          </svg>

          <svg
            id='book'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M6.5 16.039q1.31 0 2.547.3t2.453.98V7.508q-1.083-.773-2.386-1.16q-1.305-.386-2.614-.386q-.9 0-1.576.107t-1.501.4q-.23.077-.327.222Q3 6.835 3 7.008v9.015q0 .27.192.394t.423.03q.548-.185 1.267-.297t1.618-.111m6 1.28q1.216-.678 2.453-.98t2.547-.3q.9 0 1.618.111t1.267.296q.23.096.423-.029t.192-.394V7.008q0-.173-.096-.308q-.096-.134-.327-.23q-.825-.293-1.501-.4T17.5 5.961q-1.31 0-2.613.386q-1.304.387-2.387 1.16zm-.5 1.137q-.235 0-.432-.059t-.376-.15q-1.09-.595-2.27-.902T6.5 17.04q-.78 0-1.534.13q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689t.547-.442q.881-.388 1.833-.563T6.5 4.962q1.47 0 2.866.423q1.398.423 2.634 1.23q1.237-.807 2.634-1.23t2.866-.423q.973 0 1.925.175t1.833.563q.352.125.547.442t.195.689v9.665q0 .614-.516.943q-.517.328-1.1.111q-.693-.27-1.418-.39q-.724-.121-1.466-.121q-1.24 0-2.421.306t-2.271.901q-.18.093-.376.151q-.197.059-.432.059m1.885-9.508q0-.11.076-.222t.18-.168q.763-.346 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053t.886.153q.129.03.224.135q.096.104.096.257q0 .252-.15.366t-.402.052q-.37-.075-.757-.103q-.388-.028-.807-.028q-.804 0-1.573.154q-.77.154-1.46.43q-.257.099-.42-.005t-.162-.362m0 5.423q0-.11.076-.231q.076-.123.18-.178q.725-.346 1.613-.52q.888-.173 1.746-.173q.48 0 .91.053t.886.153q.129.03.224.135q.096.104.096.257q0 .252-.15.366t-.402.052q-.37-.075-.757-.103q-.388-.028-.807-.028q-.784 0-1.544.16q-.76.161-1.45.457q-.258.118-.44-.003t-.181-.397m0-2.692q0-.11.076-.222t.18-.168q.763-.347 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053t.886.153q.129.03.224.134q.096.104.096.258q0 .252-.15.366t-.402.051q-.37-.075-.757-.102q-.388-.028-.807-.028q-.804 0-1.573.154q-.77.153-1.46.43q-.257.098-.42-.005q-.162-.105-.162-.362'
            />
          </svg>
        </div>
      </div>
      <Outlet />
    </>
  )
}
