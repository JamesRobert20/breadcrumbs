import Folder from '../../components/Folder';
import File from '../../components/File';
import PathContext from '../../contexts/pathContext'
import { useContext, useEffect } from 'react'

function index({ contents }) {
    const { setGlobalPath } = useContext(PathContext);

    useEffect(() => {
        setGlobalPath(["root"])
    }, []);

  return (Object.keys(contents.children).map((item, index) => (
        contents.children[item].type === "dir" ? <Folder key={index} folderName={item} /> : <File key={index}/>
    )))
}

export default index

export async function getServerSideProps({ req, res, resolvedUrl }) {
    console.log("here is ", resolvedUrl);
  
    const contents = await (await fetch('http://localhost:3000/api/path'+ resolvedUrl, {
        method: 'POST',
        body: JSON.stringify({ mypath: "root" }),
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
  
    return {
        props: {
            contents
        }
    }
  }