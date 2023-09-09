import styled from "styled-components";

const BuyContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  font-size: 20px;
`;

const DivInput = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

const LabelInput = styled.div `
  height: 50%;
  text-align: center;
`;

const Input = styled.input`
  width: 60%;
`;


const WillBuyContent = ({quantity, setQuantity, price, setPrice}) => {

    return (
        <BuyContent>
            <DivInput>
                <LabelInput>Qnt</LabelInput>
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