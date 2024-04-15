import { useEffect, useState } from "react"

const ProductItem = ({counterGenerate}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const newArr = counterGenerate;
        setItem(newArr)
        console.log("render");
    }, [counterGenerate])

    return(
        <>
            <ul>
                {item.map(item => <li key={item}>{item}</li> )}
            </ul>
        </>
    )
}
export default ProductItem