import Content from '../../components/Content';
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

    if(contents.message)
        return (
            <div style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{"Sorry Invalid Path!"}</div>
        )

    if(contents.type !== "dir")
        return (
            <div style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{ "THIS IS FILE: " + absolutePath[absolutePath.length - 1] }</div>
        )

  return (Object.keys(contents["children"]).map((item, index) => (
        <Content key={index} contentName={item} contentType={contents["children"][item].type} /> 
    )))
}

export default Pathfinder

export async function getServerSideProps({ req, res, resolvedUrl }) {
    const contents = await (await fetch('http://localhost:3000/api/path'+ resolvedUrl)).json();

  return {
      props: {
          contents
      }
  }
}