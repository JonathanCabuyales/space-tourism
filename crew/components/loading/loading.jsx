import { Suspense } from 'react'
import './loading.css';
const loading = ({ children }) => {
    return (
        <div>
            <Suspense fallback={
                <div className='container'>
                    <h1 className='loading'>Loading...</h1>
                </div>
            }>
                {children}
            </Suspense>
        </div>
    )
}

export default loading;
