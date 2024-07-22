import {GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <div>
            <div>
                <Button secondary outline rounded className='mb-5' onClick={handleClick}>
                    <GoBell className='mr-1' />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloud className='mr-1'/>
                    Buy Now!</Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase className='mr-1'/>
                    See Deal!</Button>
            </div>
            <div>
                <Button secondary outline>Hide Adds!</Button>
            </div>
            <div>
                <Button primary rounded>Something!</Button>
            </div>
        </div>

    )
}

export default ButtonPage;