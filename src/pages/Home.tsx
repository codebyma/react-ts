import { useState } from 'react'


const Home = () => {
    const [count, setCount] = useState(0);



    return (
        <>
            <div className="sections">
                <div className="page_header">
                    <div className="page_tit">Home</div>
                </div>
                <div className="section">
                    <div>
                        <h2>현재 값: {count}</h2>
                        <button onClick={() => setCount(prev => prev + 1)}>증가</button>
                        <button onClick={() => setCount(prev => prev - 1)}>감소</button>
                    </div>

                    <br />



                </div>
            </div>
        </>
    )
}

export default Home;
