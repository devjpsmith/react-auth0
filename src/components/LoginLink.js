import {useAuth0} from "@auth0/auth0-react";

export default function() {
    const { loginWithRedirect } = useAuth0();
    return (
        <a
            href='/login'
            className='login-link'
            onClick={e => {
                e.preventDefault();
                loginWithRedirect();
            }}
        >Login</a>
    );
}