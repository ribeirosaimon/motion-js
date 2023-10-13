import {useLocation} from "react-router-dom";


const BuyStock = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const company = searchParams.get('company');

    return(
        <div>
            {company}
        </div>
    )
}

export default BuyStock