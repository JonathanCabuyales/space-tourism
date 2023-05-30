import { Suspense } from 'react'
import './loading.css';
const loading = ({ children }) => {
    return (
        <Suspense fallback={
            <div className='container'>
                <h1 className='loading'>Loading...</h1>
            </div>
        }>
            {children}
        </Suspense>
    )
}

export default loading;
