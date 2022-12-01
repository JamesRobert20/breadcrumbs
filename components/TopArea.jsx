import styles from '../styles/TopArea.module.scss'
import PathContext from '../contexts/pathContext'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext } from 'react'
import { useRouter } from 'next/router'

function TopArea() {
    const { globalPath, setGlobalPath } = useContext(PathContext);
    const router = useRouter();

    const openDirectory = index => {
        let newPath = globalPath.slice(0, index + 1);
        setGlobalPath(newPath)
        let absolutePath = newPath.join('/');
        //console.log(absolutePath);
        router.push("/" + absolutePath)
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.searchBar}>

            </div>
            <div className={styles.pathContainer}>
                {globalPath.map((path, index) => (
                    <div key={index} style={{ height: '95%', display: 'flex' }}>
                        <div 
                            onClick={() => index !== globalPath.length - 1 && openDirectory(index) }
                            className={index === globalPath.length - 1 ? styles.breadCrumbs: styles.breadCrumbs + " " + styles.canHover}
                        >
                            {path}
                        </div>
                        {index !== globalPath.length - 1 ? 
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }} ><ArrowForwardIosIcon /></div>
                            :<></>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopArea