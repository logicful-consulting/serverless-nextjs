import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<null | any>(null);

    const handleClick = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.get("/api/autocomplete");
            setData(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main>
            <h1>Another Route</h1>
            <button onClick={handleClick}>Fetch some data</button>
            {isLoading && <p>loading...</p>}
            {!isLoading && data && <p>{JSON.stringify(data)}</p>}
        </main>
    )
}