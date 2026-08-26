
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
                                    <td className="align_c">배당</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7458730009" target="_blank" rel="noopener noreferrer">
                                            TIGER 미국배당다우존스
                                        </a>
                                        <small>(SCHD와 동일한 기초지수 계열)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">배당</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR70008S0004" target="_blank" rel="noopener noreferrer">
                                            TIGER 미국배당다우존스타겟데일리커버드콜
                                        </a>
                                        <small>(SCHD + 커버드콜)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">배당</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7441640000" target="_blank" rel="noopener noreferrer">
                                            KODEX 미국배당커버드콜액티브
                                        </a>
                                        <small>(DIVO와 매우 유사한 구조 + S&P500을 비교지수로 사용)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">성장</td>
                                    <td>
                                        <a href="https://www.funetf.co.kr/product/etf/view/KR7486290000" target="_blank" rel="noopener noreferrer">
                                            TIGER 미국나스닥100타겟데일리커버드콜
                                        </a>
                                        <small>(Nasdaq100 + 커버드콜 / JEPQ와 유사)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">성장</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7418660007" target="_blank" rel="noopener noreferrer">
                                            TIGER 미국나스닥100레버리지(합성)
                                        </a>
                                        <small>(QLD / Nasdaq100 일일 수익률 2배)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">성장</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7490590007" target="_blank" rel="noopener noreferrer">
                                            RISE 미국AI밸류체인데일리고정커버드콜
                                        </a>
                                        <small>(미국 AI 밸류체인 + 90% 참여 + 데일리 옵션 프리미엄)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">배당</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7161510003" target="_blank" rel="noopener noreferrer">
                                            PLUS 고배당주
                                        </a>
                                        <small>(배당주에 투자해서 배당과 주가 상승을 같이 노린다.)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">배당</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7466940004" target="_blank" rel="noopener noreferrer">
                                            TIGER 은행고배당플러스TOP10
                                        </a>
                                        <small>(은행주 주주환원에 집중 투자한다.)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">배당</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7476800008" target="_blank" rel="noopener noreferrer">
                                            KODEX 한국부동산리츠인프라
                                        </a>
                                        <small>(리츠·인프라에서 높은 현금흐름을 얻는다.)</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align_c">배당</td>
                                    <td>
                                        <a href="https://m.funetf.co.kr/product/etf/view/KR7498400001" target="_blank" rel="noopener noreferrer">
                                            KODEX 200타겟위클리커버드콜
                                        </a>
                                        <small>(한국 대형주에 투자하면서 옵션 프리미엄으로 현금흐름을 추가한다.)</small>
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
