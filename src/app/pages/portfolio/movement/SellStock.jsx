import {useLocation} from "react-router-dom";


const SellStock = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const company = searchParams.get('company');

    return(
        <div>
            DEU BOM
        </div>
    )
}

export default SellStock