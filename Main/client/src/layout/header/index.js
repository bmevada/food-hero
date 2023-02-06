// TO DO - ADD ROUTES


const Header = () => {
    const items = useSelector((state) => state.token);
    const logged = useSelector((state) => state.logged);
    const token = useSelector((state) => state.token);
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const user = jwt(token)
            dispatch(tokenGenerate(user))
        }
    }, []);

    return (
        <div className='header'>
            <section className="top-nav">
                <div className='top-logo'>
                    <LazyLoadImage
                        onClick={() => navigate('/')}
                        height={'50px'}
                        style={{ cursor: 'pointer' }}
                        alt="logo"
                        src={Logo}
                    />
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <span className='menu-button'></span>
                </label>
                <ul className="menu">
                    <li className='home-li' style={{ cursor: 'pointer' }}>
                        <Link to="/" className='fa-home react-icons'>
                            <div className='icon-margin'>
                                <FaHome size={30} />
                            </div>
                            Food Delivery <br />+61 222 222 222
                        </Link>
                    </li>
                    <li>
                        {logged ?
                            <div>
                                <div className='icon-margin md-account' style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
                                    <MdAccountCircle size={30} /> {items.name}
                                </div>
                                {(open && token && token.role === "admin") &&
                                    <div style={{ position: 'absolute' }}>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                background: 'white',
                                                top: '10px',
                                                borderRadius: '10px',
                                                padding: '10px',
                                                fontSize: '18px',
                                                textAlign: 'left',
                                                width: '160px'
                                            }}
                                        >
                                            <div className="menu-item" onClick={() => {
                                                setOpen(false)
                                                navigate('/orders')
                                            }}>Review Orders</div>
                                            <div className="menu-item" onClick={() => {
                                                setOpen(false)
                                                navigate('/product/add')
                                            }}>Add Product</div>
                                        </div>
                                    </div>
                                }
                            </div>
                            :
                            <Link to="/signup" className='md-account react-icons'>
                                <div className='icon-margin'>
                                    <MdAccountCircle size={30} />
                                </div>
                                Create Account
                            </Link>
                        }
                    </li>
                    <li>
                        {logged ?
                            <div className='md-box-arrow react-icons' style={{ cursor: 'pointer' }}>
                                <BsBoxArrowInRight style={{ marginRight: "10px" }} size={30} />
                                <div onClick={() => dispatch(logOut(items))}>Log Out</div>
                            </div>
                            :
                            <Link to="/signIn" className='md-box-arrow react-icons'>
                                <div className='icon-margin'>
                                    <BsBoxArrowInRight size={30} />
                                </div>
                                Login
                            </Link>
                        }
                    </li>
                </ul>
            </section>
        </div>
    )


}

export default Header;