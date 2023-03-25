import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GlobalStateContext } from './_app';


export default function admin() {
    const router = useRouter();
    const { token } = useContext(GlobalStateContext);

    useEffect(() => {
        if (token == null) {
            router.push('/admin');
        } else {

        }
    }, []);

    // Don't show anything if token is null
    // Once jwt verify api is set up, this should be used as well apart from the null check
    if (token == null) {
        return ''
    }

    return (
        <>
            <h1>You are logged in!</h1>

            {/* Used to make sure that user cannot go back to login page when token already exists. Did this now since token state doesn't persist between refreshes yet */}
            <Link href="/admin">Go to Login</Link>

        </>
    )

}