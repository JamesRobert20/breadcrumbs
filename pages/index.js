import Content from '../components/Content';
import PathContext from '../contexts/pathContext'
import { useContext, useEffect } from 'react'

export default function Home() {
    const { setGlobalPath } = useContext(PathContext);

    useEffect(() => {
        setGlobalPath([])
    }, []);

    return (
        <Content contentName={"root"} contentType={"dir"} />
    )
}


