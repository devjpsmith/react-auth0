import {useAuth0} from "@auth0/auth0-react";

export default function() {
    const { logout } = useAuth0();
    return (
        <div>
            <a href="/logout" onClick={e => {
                e.preventDefault();
                logout();
            }}>Logout</a>
        </div>
    );
}