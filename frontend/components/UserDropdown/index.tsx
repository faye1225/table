import React, { useState, useEffect } from 'react'
// import { history, useSelector, useDispatch, useIntl, useLocation } from 'umi'
import { AuthModelState } from '../../models/auth'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const DropdownItem = ({
  message,
  handleClick,
}: {
  message: string
  handleClick: () => void
}) => {
  return (
    <div
      className="w-full hover:bg-gray-100 p-4 text-md cursor-pointer transition-all duration-200 ease-in-out"
      onClick={handleClick}
    >
      {message}
    </div>
  )
}

const UserDropdown: React.FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const dispatch = useDispatch()
  const { user } = useSelector(({ auth }: { auth: AuthModelState }) => auth)
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

  let timer: NodeJS.Timeout | null = null

  const onMouseEnter = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    setDropdownVisible(true)
  }

  const onMouseLeave = () => {
    timer = setTimeout(() => {
      setDropdownVisible(false)
    }, 200)
  }

  useEffect(() => {
    setDropdownVisible(false)
  }, [location.pathname])

  return (
    <div className="relative h-full flex flex-col justify-center z-10">
      <div className="h-full flex justify-end relative">
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src={user?.avatar}
          className="w-16 p-4 rounded-full cursor-pointer"
        />
      </div>

      <div
        className={clsx('absolute w-72 top-16 right-0 mt-2', {
          hidden: !dropdownVisible,
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="shadow flex flex-col py-4 rounded-lg bg-white divide-y divide-gray-200">
          <div className="">
            <DropdownItem
              message={t('site.routes.user_profile')}
              handleClick={() => {
                router.push(`/user/${user?.username}/inspiration`)
              }}
            />
            <DropdownItem
              message={t('site.routes.user_update')}
              handleClick={() => {
                router.push('/account/profile')
              }}
            />
            <DropdownItem
              message={t('site.routes.user_password')}
              handleClick={() => {
                router.push('/account/password')
              }}
            />
          </div>

          <DropdownItem
            message={t('auth.sign_out')}
            handleClick={() => {
              dispatch({ type: 'auth/signOut' })
              window.location.reload()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default UserDropdown
