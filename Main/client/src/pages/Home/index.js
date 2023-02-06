//TO DO - ADD ROUTES

const Home = () => {
    let navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(
      () => {
        axios.get('/products/recent').then((res) => {
          if (res.data.success) setData(res.data.products)
        }).catch(err => console.log(err))
      }, [])
  
      //Homepage to feature special food item
    return (
      <div className="home-page">
        <div className="carousel-container">
          <div className="label">
            <div className="label-special">SPECIAL</div>
            <div>
              <Link to="/see-all" className="navigation-button">
                <div className="navigation-seeAll">See All</div>
                <AiFillPlayCircle className="navigation-icon" />
              </Link>
            </div>
          </div>
          <div className="underline"></div>
          <div className="banner">
            <DemoCarousel data={data} />
          </div>
        </div>
        <div className="product-container">
          <div className="label">NEW</div>
          <div className="underline"></div>
          <div className="product-list">
            {
              data.map((item, index) => {
                return (
                  <div key={index} className="product-item">
                    <ProductOne
                      title={item.name}
                      price={item.price}
                      source={item.img}
                      buttonValue="See more"
                      onClick={() => navigate(`product/${item._id}`)}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
  
  export default Home