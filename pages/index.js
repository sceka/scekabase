import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";
import phone from "../statics/phone.png";
import eth from "../statics/eth1.png";
import btc from "../statics/bitcoin.png";
import lite from "../statics/lite.png";
import cube from "../statics/cube.png";
import circle from "../statics/circle.png";
import piramid from "../statics/piramid.png";
import spiral from "../statics/spiral.png";
import bg from "../statics/phone-bg.png";
import Image from "next/image";

export default function Home() {
    const { address, connectWallet } = useWeb3();
    return (
        <div>
            <Wrapper>
                {address ? (
                    <Dashboard address={address} />
                ) : (
                    <Container>
                        <Left>
                            <H2>
                                Earn up to 5.7% APY interest from your crypto
                                assets
                            </H2>
                            <P>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industrys standard dummy text ever since the
                                1500s.
                            </P>
                            <WalletConnect
                                onClick={() => connectWallet("injected")}
                            >
                                <Button>Connect Wallet</Button>
                            </WalletConnect>
                        </Left>

                        <Right>
                            <ImageContainer>
                                <Image src={bg} width={550} height={850} />
                            </ImageContainer>
                            <Image1Container>
                                <Image src={phone} width={550} height={850} />
                            </Image1Container>
                            <Image2Container>
                                <Image src={eth} width={400} height={400} />
                            </Image2Container>
                            <Image3Container>
                                <Image src={btc} width={400} height={400} />
                            </Image3Container>
                            <Image4Container>
                                <Image src={lite} width={400} height={400} />
                            </Image4Container>
                            <Image5Container>
                                <Image src={cube} width={300} height={250} />
                            </Image5Container>
                            <Image6Container>
                                <Image src={circle} width={150} height={150} />
                            </Image6Container>
                            <Image7Container>
                                <Image src={spiral} width={400} height={400} />
                            </Image7Container>
                            <Image8Container>
                                <Image src={piramid} width={400} height={400} />
                            </Image8Container>
                        </Right>
                    </Container>
                )}
            </Wrapper>
        </div>
    );
}

const ImageContainer = styled.div`
    width: 750px;
    position: absolute;
`;

const Image8Container = styled.div`
    position: absolute;
    right: 35%;
    top: 22%;
    width: 140px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 1px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
`;
const Image7Container = styled.div`
    position: absolute;
    right: 36%;
    top: 72%;
    width: 105px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 1px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
`;
const Image6Container = styled.div`
    position: absolute;
    right: 16%;
    top: 25%;
    width: 105px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 1px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
`;
const Image5Container = styled.div`
    position: absolute;
    right: 18%;
    top: 72%;
    width: 110px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 1px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
`;

const Image4Container = styled.div`
    position: absolute;
    right: 41%;
    top: 50%;
    width: 110px;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 15px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
`;

const Image3Container = styled.div`
    position: absolute;
    right: 18%;
    top: 50%;
    width: 110px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 15px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
`;

const Image2Container = styled.div`
    position: absolute;
    right: 29%;
    top: 10%;
    width: 110px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
      0% { transform: translate(0,  0px); }
      50%  { transform: translate(0, 15px); }
      100%   { transform: translate(0, -0px); }   
  }
}
`;
const Image1Container = styled.div`
    position: absolute;
    right: 12%;
    top: 10%;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 8px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
`;

const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const P = styled.p`
    display: flex;
    margin-left: 20%;
    color: #676d7b;
`;

const H2 = styled.h2`
    display: flex;
    font-size: 66px;
    margin-left: 20%;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: auto;
`;

const Wrapper = styled.div`
    display: flex;
    background-color: #141a2a;
    color: white;
    display: grid;
    place-items: center;
    height: 120vh;
`;

const WalletConnect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    border: 1px solid #282b2f;
    padding: 0.8rem;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 0.4rem;
    background-color: #3773f5;
    color: #ffffff;
    cursor: pointer;
    width: 170px;
    margin-right: 290px;
    margin-top: 15px;

    &:hover {
    }
`;
