import Header from '@/components/Header'
import { GetServerSideProps } from 'next'
import { Provider } from 'next-auth/providers'
import { getProviders, signIn } from 'next-auth/react'

const SignIn = ({ providers }: { providers: Provider[] }) => {
  return (
    <>
      <Header />

      <div className="-mt-24 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SignIn

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
