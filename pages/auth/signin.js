import React from 'react'
import {getProviders, signIn as SignIntoProvider} from "next-auth/react";
import Header from '@/components/Header';


function signIn({providers}) {
  return (
    <>

    <Header />

    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-40 px-14 text-center'>
      <img className='w-80' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
      <p className='font-xs italic'>
        This is not a real app. It's built for EDUCATIONAL PURPOSES ONLY.
      </p>
    <div className='mt-40'>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className='p-3 bg-blue-500 rounded-lg text-white' 
        onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/' })}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </div>

    </div>

  </>
)
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return{
    props: {
      providers 
    }
  }
}

export default signIn