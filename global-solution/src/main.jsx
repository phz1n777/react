import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="434430983016-7ihs61jgdc7mg13fu9o36bqg84s7k7br.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
)
