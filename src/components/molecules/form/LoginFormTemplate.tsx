import React, { useContext } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { globalContext } from '../../../context/GlobalContextProvider'
import Wrapper from '../../atoms/Wrapper'

export default function LoginFormTemplate({ children }: React.PropsWithChildren) {
  const { loginRequest, setLoginRequest } = useContext(globalContext)
  return (
    <>
      <Wrapper
        className={`fixed top-0 left-0 z-[100] flex h-[100vh] w-[100vw] items-center justify-center backdrop-blur-lg `}
        style={{ transition: '1s', opacity: loginRequest == 'hidden' ? 0 : 1 }}
      >
        <div className="relative flex h-[80%] w-[95%] max-w-[65rem] items-center justify-center gap-2 bg-[#02020285] xl:w-[90%]">
          <div className="relative h-full w-[30%] max-md:hidden lg:w-[40%]">
            <div
              className="absolute h-full w-full bg-orange-500"
              style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}
            ></div>
            <StaticImage
              src="https://images.pexels.com/photos/3916376/pexels-photo-3916376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              placeholder={'blurred'}
              style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}
              className="h-full w-[99%]"
            />
          </div>
          <div className="flex h-fit w-[90%] flex-col py-[5%] pr-[5%] md:w-[70%] md:gap-10 lg:w-[60%] xl:px-[5%]">
            <div className="flex h-fit w-full items-center justify-between">
              <StaticImage
                placeholder={'blurred'}
                src={'../../../images/GVM_Logo.svg'}
                className="w-[70%] lg:w-[50%]"
                alt=""
              />
              <div
                className="text-orange-500"
                onClick={() => {
                  setLoginRequest('hidden')
                }}
              >
                {/* <StaticImage src="../../images/ComponentImages/cross.png" alt="X" height={40} /> */}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  className="cursor-pointer"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="#f97316"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="hideScrollBar mt-2 max-h-[90%] overflow-y-auto">{children}</div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
