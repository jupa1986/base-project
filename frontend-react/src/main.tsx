import App from 'App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";


registerSW()

const MAX_RETRIES = 1
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES
		}
	}
})
const REACT_APP_AUTH0_DOMAIN = import.meta.env.VITE_APP_AUTH0_DOMAIN || '';
const REACT_APP_AUTH0_CLIENTID = import.meta.env.VITE_APP_AUTH0_CLIENTID || '';
console.log('+++',import.meta.env , REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENTID);
ReactDOM.render(
	<StrictMode>
        <Auth0Provider
                domain={REACT_APP_AUTH0_DOMAIN}
                clientId={REACT_APP_AUTH0_CLIENTID}
                redirectUri={window.location.origin}
                // audience={process.env.REACT_APP_AUTH0_AUDIENCE}
                // scope={process.env.REACT_APP_AUTH0_SCOPE}
            >
		    <QueryClientProvider client={queryClient}>
		    	<App />
		    </QueryClientProvider>
		</Auth0Provider>
	</StrictMode>,
	document.querySelector('#root')
)


