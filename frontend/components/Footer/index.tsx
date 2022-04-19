import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'

const Footer: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className="w-full bg-gray-100 flex flex-col">
      <div className="py-16 mx-16 flex flex-col items-center lg:flex-row lg:justify-between border-t border-solid border-opacity-50 text-gray-700 gap-4">
        <div className="flex flex-row justify-center gap-4">
          <a
            className="link underline"
            href="https://github.com/tezignlab"
            target="_blank"
          >
            Team
          </a>
          <a
            className="link underline"
            href="https://github.com/tezignlab/table"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div
          className="flex items-center gap-1 hover:text-gray-400 cursor-pointer"
          onClick={() => {
            router.locale === 'en-US'
              ? router.replace(router.pathname, router.pathname, {
                  locale: 'zh-CN',
                })
              : router.replace(router.pathname, router.pathname, {
                  locale: 'zh-CN',
                })
          }}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448-200.6-448-448-448zM362.5 158.1c27.4-11.5 55.8-19.8 84.9-24.7C409.8 162 376.6 196.3 348.7 235.2c-21.8-9.2-43-20.4-63.2-33.4 23.8-17.5 49.6-32.1 77-43.7zM158.2 362.5c19.3-45.7 47-86.7 82.3-122l0.9-0.9C265.7 256.5 291.6 271 318.6 283c-34 61.8-53.7 130.1-57.8 201H129c3-42 12.8-82.7 29.2-121.5z m82.3 421c-35.3-35.3-63-76.3-82.3-122C141.8 622.7 132 582 129 540h131.8c4.1 70.8 23.8 139.2 57.8 200.9-27 12-52.8 26.6-77.2 43.5l-0.9-0.9z m122 82.3c-27.4-11.5-53.1-26.2-76.9-43.6 20.2-13 41.3-24.1 63.1-33.4 27.9 39 61.1 73.2 98.6 101.8-29.1-4.9-57.4-13.2-84.8-24.8zM484 848.3c-30.3-22.6-57.2-49-80-78.4 26-6.8 52.7-11.2 80-13v91.4z m0-308.3v160.8c-38.4 2.2-76.1 9-112.7 20.3-31.1-54.4-50.1-116.1-54.4-181.2H484v0.1z m0-56H316.9c4.3-65 23.3-126.7 54.5-181.1C407.9 314.2 445.6 321 484 323.2V484z m0-216.9c-27.3-1.8-54-6.1-79.9-13 22.8-29.4 49.7-55.8 79.9-78.4v91.4zM783.5 240.6c35.3 35.2 63 76.2 82.3 121.9C882.2 401.3 892 442 895 484H763.2c-4.1-70.9-23.8-139.2-57.8-200.9 27-12 52.8-26.5 77.2-43.4l0.9 0.9zM661.4 158.2c27.5 11.5 53.2 26.2 77 43.6-20.2 13-41.3 24.2-63.2 33.4-26.4-36.9-57.9-69.8-93.6-97.8-1.7-1.4-3.5-2.7-5.2-4 29.1 4.9 57.6 13.2 85 24.8zM540 176.2c29.8 22.5 56.4 48.9 79.1 78.1-25.7 6.7-52.1 11-79.1 12.8v-90.9z m0 147c38.1-2.2 75.5-8.9 111.8-20.1 31.4 54.6 50.8 116.4 55.2 180.9H540V323.2z m0 216.8h167.1c-4.3 65.1-23.3 126.7-54.4 181.2-36.6-11.3-74.3-18.1-112.7-20.3V540z m0 217c27 1.8 53.8 6.3 79.8 13.2-22.8 29.3-49.6 55.7-79.8 78.2V757z m121.6 108.8c-27.5 11.6-55.9 19.9-84.9 24.8 37.4-28.6 70.6-62.7 98.5-101.6 21.9 9.2 43.1 20.3 63.3 33.2-23.8 17.4-49.5 32-76.9 43.6z m204.2-204.3c-19.3 45.7-47 86.7-82.3 122l-0.9 0.9c-24.4-16.9-50.2-31.4-77.2-43.4 34-61.8 53.7-130.1 57.8-201H895c-3 42-12.8 82.7-29.2 121.5z"></path>
          </svg>
          <span>{t('site.lang')}</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
