import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import React from 'react'

const NotFound: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex-grow w-full h-full p-8 flex flex-col justify-center">
      <Head>
        <title>{`${t('general.404')} - ${t('site.name')}`}</title>
      </Head>

      <div className="mx-auto w-48 lg:w-72">
        <img className="object-fit" src={`/404.png`} alt="not-found" />
      </div>
    </div>
  )
}

export default NotFound
