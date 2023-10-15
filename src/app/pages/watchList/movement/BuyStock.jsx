import {useLocation} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {ExclamationIcon} from "../../../components/icon/GlobalIcon";

const CompanyNameInformation = styled.h1`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const CompanyBuyForm = styled.div`
  font-size: 125%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  
  input {
    width: 100%;
    padding: 5px;
  }
`;

const BuyStock = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const company = searchParams.get('company');
    const [quantity, setQuantity] = useState(0)
    const [quantityAttention, setQuantityAttention] = useState(false)
    const [value, setValue] = useState(0)
    const [valueAttention, setValueAttention] = useState(false)

    const handleQuantityChange = (event) => {
        setQuantity(removeLeadingZeros(event.target.value));
        setQuantityAttention(false)
    };

    const handleValueChange = (event) => {
        setValue(removeLeadingZeros(event.target.value));
        setValueAttention(false)
    };

    function buyCompany() {
        if (quantity === 0) {
            setQuantityAttention(true)
            return
        }
        if (value === 0) {
            setValueAttention(true)
            return
        }
        console.log(quantity)
        console.log(value)
    }

    function removeLeadingZeros(numberString) {
        // Use uma expressão regular para remover zeros à esquerda
        const strippedNumber = numberString.replace(/^0+/, '');
        return strippedNumber || '0'; // Retorna '0' se a string estiver vazia
    }

    return (
        <div>
            <CompanyNameInformation>
                {company.toUpperCase()}
            </CompanyNameInformation>
            <CompanyBuyForm>
                <div>
                    <div>
                        Quantity:
                    </div>
                    <InputContainer>
                        <input type="number" id="quantidade" name="quantidade" value={quantity} onChange={handleQuantityChange}/>
                        <>
                            {
                                quantityAttention &&  <ExclamationIcon/>
                            }
                        </>

                    </InputContainer>

                </div>
                <div>
                    <div>
                        <label>Value:</label>
                    </div>
                    <InputContainer>
                        <input type="number" id="value" name="value" value={value} onChange={handleValueChange}/>
                        {
                            valueAttention && <ExclamationIcon/>
                        }
                    </InputContainer>
                </div>
                <input type="submit" value="Submit" onClick={buyCompany}/>
            </CompanyBuyForm>
        </div>
    )
}

export default BuyStock