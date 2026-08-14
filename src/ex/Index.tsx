import { Link, Outlet } from "react-router-dom";

const Index = () => {
    return (
        <>
            <div className="sections">
                {/* Page 내부 라우팅용 버튼 */}
                <nav className="sub_menu">
                    <Link to="ButtonDemo"><button>Button</button></Link>
                    <Link to="TextDemo"><button>Text</button></Link>
                </nav>
                {/* 여기서 서브 라우트 컴포넌트를 렌더링 */}
                <Outlet />
            </div>
        </>
    )
}

export default Index;