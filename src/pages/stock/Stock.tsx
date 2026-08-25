
import style from './Stock.module.css'
const Stock = () => {
    return (
        <>
            <div className="sections">
                <div className="page_header">
                    <div className="page_tit">Stock</div>
                </div>
                <div className="section">
                    <div className={style.stock_container}>

                    </div>
                    <div className="h_tit1">나스닥100</div>
                    <p>분배율</p>
                    <div className="h_tit2">커버드콜</div>
                    <div className="h_tit3">h_tit3</div>
                    <div className="h_tit4">h_tit4</div>
                </div>
            </div>
        </>
    )
}

export default Stock;
