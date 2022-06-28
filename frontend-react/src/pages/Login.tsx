// import getFruits from 'api/getFruits'
import Head from 'components/Head'
// import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export default function LoginPage(): ReactElement {
	// const { isLoading, isError, error, data } = useQuery('fruits', getFruits)
	// if (isLoading || isError) {
	// 	return <LoadingOrError error={error as Error} />
	// }
	const {
        error,
        isAuthenticated,
        isLoading,
        user,
        getAccessTokenSilently,
        logout,
        loginWithRedirect,
    } = useAuth0();
	
	// if (isLoading) {
    //     return <div>Loading...</div>
    // }
    if (error) {
        return <div>uh oh...something went wrong</div>
    }
    if (isAuthenticated) {
        return (
			<><Head title='NextBrave logout' /><div>
				{/* <button onClick={() => logout({ returnTo: window.location.origin })}>
        logout
    </button> */}
			You are authenticated
			</div></>
           
        )
    } else {
        return (
			<><Head title='NextBrave login' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				<button onClick={() => loginWithRedirect()} className='bg-green-400 p-4 border-green-900'>login</button>
			</div></>
        )
    }
}
