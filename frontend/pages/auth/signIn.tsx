import React, { ReactElement } from 'react'
// import { useIntl, useDispatch, useSelector } from 'umi'
import { useFormik, FormikProvider, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../../components/AuthInput'
import { Loading } from '../../components/Icons'
import { GlobalLoadingState } from '../../utils'
import { USERNAME_REGEX } from '../../constants'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import AuthLayout from '../../components/layouts/auth'
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? '')),
    },
  }
}
export default function SignIn() {
  const dispatch = useDispatch()
  const globalLoading = useSelector(
    ({ loading }: { loading: GlobalLoadingState }) => loading,
  )

  const { t } = useTranslation('common')
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values: { username: string; password: string }) => {
      dispatch({
        type: 'auth/signIn',
        payload: {
          username: values.username,
          password: values.password,
          type: 'username',
        },
      })
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(t('auth.validation.require'))
        .matches(USERNAME_REGEX, t('auth.validation.correct')),
      password: Yup.string().required(t('auth.validation.require')),
    }),
  })

  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="w-full text-center text-2xl mb-6 capitalize hidden lg:block">
        {t('auth.welcome')}
      </div>
      <FormikProvider value={formik}>
        <Form className="flex flex-col space-y-6">
          <Input
            label={t('user.username')}
            id="username"
            name="username"
            type="text"
          />
          <Input
            label={t('user.password')}
            id="password"
            name="password"
            type="password"
          />
          <button
            type="submit"
            className="btn btn-primary capitalize flex flex-row space-x-2 justify-center"
            disabled={globalLoading.models.auth}
          >
            {globalLoading.models.auth && (
              <div className="h-5 w-5">
                <Loading color="white" />
              </div>
            )}
            <div className="text-md">{t('auth.sign_in')}</div>
          </button>
        </Form>
      </FormikProvider>
    </div>
  )
}
SignIn.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}
