import HeaderLogo from '../images/headerlogo.png';

const HeaderView = () => {
    return (
        <header>
            <div className="px-3 py-2 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <svg className="bi me-2" width={"40px"} height={"32px"} role="img" aria-label="Bootstrap">
                            <img src={HeaderLogo} alt="Header Logo"></img>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderView