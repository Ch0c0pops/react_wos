import React from "react"
import withAuthRedirectHOC from "../HOC/withAuthRedirectHOC";


const Settings: React.FC = () => {
    return <div>Settings</div>
}

const SettingsWithAuthRedirect = withAuthRedirectHOC(Settings)

export default SettingsWithAuthRedirect