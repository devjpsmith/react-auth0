import {useAuth0} from "@auth0/auth0-react";
import LogoutLink from "./LogoutLink";
import LoginLink from "./LoginLink";
import './UserProfile.css'

export default function() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className={'user-profile'}>
            {isAuthenticated && (
                <>
                    <div className={'user-profile-info'}>
                        <img src={user.picture} alt="{user.name}"/>
                        <div className="user-profile-text">
                            {user.name}
                            <LogoutLink/>
                        </div>
                    </div>
                </>
            )}
            {!isAuthenticated && (
                <LoginLink/>
            )}
        </div>
    );
}