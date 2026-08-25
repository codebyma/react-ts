
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
                    <div className="h_tit2">종목</div>
                    <div className="table_wrap">
                        <table>
                            <colgroup>
                                <col className="w20" />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>분류</th>
                                    <th>종목</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>배당</td>
                                    <td>
                                        TIGER 미국배당다우존스
                                        <small>SCHD</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>배당</td>
                                    <td>
                                        TIGER 미국배당다우존스타겟데일리커버드콜
                                        <small>SCHD</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>배당</td>
                                    <td>
                                        KODEX 미국배당커버드콜액티브
                                        <small>DIVO</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>성장</td>
                                    <td>
                                        TIGER 미국나스닥100타겟데일리커버드콜
                                        <small>QQQ</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>성장</td>
                                    <td>
                                        TIGER 미국나스닥100레버리지(합성)
                                        <small>QLD</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>성장</td>
                                    <td>
                                        RISE 미국AI밸류체인데일리고정커버드콜
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="h_tit2">금융소득 건보료 영향 비교</div>
                    <p>2026.08.25</p>
                    <div className="table_wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>가입 유형</th>
                                    <th>주요 변화</th>
                                    <th>계산 특징</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>직장가입자</th>
                                    <td>보수외소득월액 보험료 추가</td>
                                    <td>2,000만 원 초과분에만 부과</td>
                                </tr>
                                <tr>
                                    <th>피부양자</th>
                                    <td>자격 상실 및 지역 전환</td>
                                    <td>전체 소득이 부과 베이스</td>
                                </tr>
                                <tr>
                                    <th>지역가입자</th>
                                    <td>소득월액 보험료 증가</td>
                                    <td>1,000만 원 초과 시 전액 반영</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Stock;
