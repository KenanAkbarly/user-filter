function Search() {
    const [searchTerm, setSearchTerm] = useState([]);
    const [text,setText] = useState([]);
    
    const getAPI = async() => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setText(data.Search)
    }

    useEffect( () => {
        getAPI()
    }, [])

    return <div>
            <input 
                placeholder="searching"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
};