import styled from "styled-components";
import {useState} from "react";


const BuyContent = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: red;
  width: 70%;
  font-size: 20px;
`;

const DivInput = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelInput = styled.div `
  height: 50%;
  width: 70%;
  text-align: center;
`;

const Input = styled.input`
  width: 60%;
`;


const WillBuyContent = () => {
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0.0)


    return (
        <BuyContent>
            <DivInput>
                <LabelInput>Quantity</LabelInput>
                <Input
                    type="number"
                    placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                />
            </DivInput>
            <DivInput>
                <LabelInput>Price</LabelInput>
                <Input
                    type="number"
                    placeholder="Price value"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    step="0.01"
                />
            </DivInput>
        </BuyContent>
    )
}

export default WillBuyContent