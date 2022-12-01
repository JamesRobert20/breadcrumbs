import PathContext from '../contexts/pathContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function Content({ contentName, contentType }) {
    const { globalPath, setGlobalPath } = useContext(PathContext);
    const router = useRouter();

    return (
        <div 
            onClick={() => {
                setGlobalPath([...globalPath, contentName])
                contentName === "root" ? router.push("/root") : router.push("/root/" + [...globalPath, contentName].slice(1).join("/"));
            }} 
            className={contentType === "dir" ? "folderContainer": "fileContainer"}
        >
            {contentType === "dir" ? 
                <img alt="folder-icon" src="/folder-icon.png" className="folderIcon"></img> 
                :<InsertDriveFileIcon fontSize='large' className="fileIcon" />
            }
            <div className={contentType === "dir" ? "folderName": "fileName"}>{contentName}</div>   
        </div>
    )
  }
  
  export default Content