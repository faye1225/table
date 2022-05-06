import { getRecommendProjects } from '@/services/project'
import clsx from 'clsx'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { LogoWhite } from '../components/Images'
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? '')),
    },
  }
}
const DownloadAppPage: React.FC = () => {
  const [isIOSHover, setIsIOSHover] = useState(false)
  const [isAndroidHover, setIsAndroidHover] = useState(false)
  const { t } = useTranslation('common')
  const { data: projects } = useQuery(['recommendProjects'], async () => {
    const result = await getRecommendProjects({ skip: 0, limit: 12 })
    return result.data.data
  })

  return (
    <div className="w-full h-full">
      <div className="top-0 bottom-0 hidden  lg:flex flex-wrap z-0 h-screen w-screen overflow-x-hidden overflow-y-hidden">
        {projects &&
          projects.map((project) => (
            <img key={project.id} className="h-1/3 w-1/4 object-cover object-center" src={project.cover} />
          ))}
        <div className="absolute h-screen w-screen grid grid-cols-2 gap-20 bg-black bg-opacity-70 z-10">
          <div className="flex flex-col my-auto justify-self-end">
            <div className="absolute w-72 mx-auto"></div>
            <div className="w-72 p-5"></div>
          </div>

          <div className="flex flex-col my-auto justify-self-start text-white">
            <LogoWhite className="w-48 object-fill text-white" />
            <p className="text-3xl my-4">{t('app.desc')}</p>
            <div className="flex flex-row my-6 text-black">
              <div className="h-36 mr-4">
                <div
                  onMouseEnter={() => {
                    setIsIOSHover(true)
                  }}
                  onMouseLeave={() => {
                    setIsIOSHover(false)
                  }}
                  className={clsx('w-28 py-2 px-4 bg-white text-center ', {
                    'rounded-3xl': !isIOSHover,
                    'rounded-2xl': isIOSHover,
                  })}
                >
                  {t('app.qr.ios')}
                </div>
              </div>
              <div className="h-36 mr-4">
                <div
                  onMouseEnter={() => {
                    setIsAndroidHover(true)
                  }}
                  onMouseLeave={() => {
                    setIsAndroidHover(false)
                  }}
                  className={clsx('w-28 py-2 px-4 bg-white text-center ', {
                    'rounded-3xl': !isAndroidHover,
                    'rounded-2xl': isAndroidHover,
                  })}
                >
                  {t('app.qr.android')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadAppPage
