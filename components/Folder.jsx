import PathContext from '../contexts/pathContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

function Folder({ folderName }) {
    const { globalPath, setGlobalPath } = useContext(PathContext);
    const router = useRouter();

    return (
        <div 
            onClick={() => {
                setGlobalPath([...globalPath, folderName])
                folderName === "root" ? router.push("/root") : router.push("/root/" + [...globalPath, folderName].slice(1).join("/"));
            }} 
            className="folderContainer"
        >
            <img alt="folder-icon" src="/folder-icon.png" className="folderIcon"></img> 
            <div className="folderName">{folderName}</div>   
        </div>
    )
  }
  
  export default Folder