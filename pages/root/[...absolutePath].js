import Folder from '../../components/Folder';
import File from '../../components/File';
import PathContext from '../../contexts/pathContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

function Pathfinder({ contents }) {
    const { setGlobalPath } = useContext(PathContext);
    const router = useRouter();
    const { absolutePath } = router.query

    useEffect(() => {
        setGlobalPath(["root", ...absolutePath])
    }, []);

    if(contents.type !== "dir")
        return (
            <div>THIS IS FILE: {absolutePath[-1]} </div>
        )

  return (Object.keys(contents.children).map((item, index) => (
        contents.children[item].type === "dir" ? <Folder key={index} folderName={item} /> : <File key={index}/>
    )))
}

export default Pathfinder

export async function getServerSideProps({ req, res, resolvedUrl }) {
  console.log("here it is ", resolvedUrl);

  const contents = await (await fetch('http://localhost:3000/api/path'+ resolvedUrl)).json();

  return {
      props: {
          contents
      }
  }
}