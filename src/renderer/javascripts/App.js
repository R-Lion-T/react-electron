import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { ac_update_state } from './redux/actions/ac_state'

export const App = () => {
    const dispath = useDispatch()
    const {state} = useSelector(state=>state)

    React.useEffect(() => {

        window.MessagesAPI.onLoaded()
            .then(data=>dispath(ac_update_state(data)))

    }, [])

    const {appName, electronVersion, nodeVersion, chromiumVersion} = state

    return (
        <div>
            <div className="message">
                <h1>{appName} app</h1>
                <div>built with Electron v  {electronVersion}</div>
                <small>running on Node v {nodeVersion} and Chromium v {chromiumVersion}</small>
            </div>
        </div>
    )
}
