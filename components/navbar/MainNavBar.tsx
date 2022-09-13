import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import MapMarker from '../resources/MapMarker'
import ThumbsLogo from '../resources/ThumbsLogo'

interface BurgerProps {
  burgered: boolean
  burger: Function
}

const MainNavBar = (props: BurgerProps) => {
  const isBurger = props.burgered
  const burgerCycle = props.burger
  const [login, setLogin] = useState<null | string>(null)
  
  useEffect(() => {
    const userType = sessionStorage.getItem('UserType')
    setLogin(userType)
  }, [])

  // const navigate = useNavigate()

  const logoutBtn = () => {
    sessionStorage.clear()
    // navigate('/')
  }

  return (
    <nav
      id="navBar"
      className="sticky top-0 z-50 flex flex-row bg-white px-4 py-3 shadow md:px-6 md:py-6 lg:px-10 lg:py-5"
    >
      <a href='/'>
        <ThumbsLogo />
      </a>
      <div id="mobileNav" className="ml-auto md:hidden">
        <Hamburger
          color="#787878"
          size={20}
          onToggle={(isBurger) => {
            if (isBurger) {
              burgerCycle(true)
            } else {
              burgerCycle(false)
            }
          }}
        />
      </div>
      <div id="desktopNav" className="hidden w-full flex-row md:flex">
        <ul className="mx-10 list-none self-center font-bold">
          <li className="mr-7 inline-block">
            <a href="/order/cafes">사이렌오더</a>
          </li>
          <li className="mr-7 inline-block">
            <a href="/cards">포인트</a>
          </li>
          <li className="inline-block">
            <button>GIFT</button>
          </li>
        </ul>
        <div className="ml-auto flex flex-shrink-0 flex-row self-center">
          <a href="/store" className="flex flex-row self-center">
            <MapMarker />
            <span className="ml-4 mr-10 font-semibold">지도로 찾기</span>
          </a>
          {login === null ? (
            <>
              <button className="rounded-full border border-black px-4 py-1 font-semibold">
                <a href="login">로그인</a>
              </button>
              <button className="ml-4 rounded-full border border-black bg-black px-4 py-1 font-semibold text-white">
                <a href="/member">회원가입</a>
              </button>
            </>
          ) : (
            <>
              <button
                className="rounded-full border border-black px-4 py-1.5 font-semibold"
                onClick={logoutBtn}
              >
                로그아웃
              </button>
              {login === 'admin' ? (
                <button className="ml-4 rounded-full border border-black bg-black px-4 py-1.5 font-semibold text-white">
                  <a href="/admin/CafeManageMaster">관리자 페이지</a>
                </button>
              ) : (
                <button className="ml-4 rounded-full border border-black bg-black px-4 py-1.5 font-semibold text-white">
                  <a href="/admin/LikeList">My Page</a>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default MainNavBar
