import Folder from '../components/Folder';
import PathContext from '../contexts/pathContext'
import { useContext, useEffect } from 'react'

export default function Home() {
    const { setGlobalPath } = useContext(PathContext);

    useEffect(() => {
        setGlobalPath([])
    }, []);

    return (
        <Folder folderName={"root"} />
    )
}


