import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const clerk_key=import.meta.env.VITE_CLERK_KEY;

console.log("clerk_key",clerk_key);

if(!clerk_key){
  throw new Error("Key was not found");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
     </ClerkProvider>
  </StrictMode>,
)




