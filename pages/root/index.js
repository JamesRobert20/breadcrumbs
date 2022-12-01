import Content from '../../components/Content';
import PathContext from '../../contexts/pathContext'
import { useContext, useEffect } from 'react'

function index({ contents }) {
    const { setGlobalPath } = useContext(PathContext);

    useEffect(() => {
        setGlobalPath(["root"])
    }, []);

    if(contents.type !== "dir")
        return (
            <div>{"THIS IS FILE: root"}</div>
        )

  return (Object.keys(contents.children).map((item, index) => (
        <Content key={index} contentName={item} contentType={contents["children"][item].type} />
    )))
}

export default index

export async function getServerSideProps({ req, res, resolvedUrl }) {
    const contents = await (await fetch('http://localhost:3000/api/path'+ resolvedUrl)).json();

  return {
      props: {
          contents
      }
  }
}