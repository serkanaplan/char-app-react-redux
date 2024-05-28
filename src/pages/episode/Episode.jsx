import {useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { episodeSelector, fetchEpisodes ,errorSelector,stausSelector} from '../../redux/episodeSlice'
import Error from '../../components/error/Error'
import Loader from '../../components/loader/Loader'
import Item from './Item'


export default function Episode() {
  const episode = useSelector(episodeSelector)
  const status = useSelector(stausSelector)
  const error = useSelector(errorSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEpisodes())
    }
  }, [dispatch])

  if (status === "failed") {
    return <Error message={error} />
  }
  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
      gap: "15px",
      marginLeft: "30px",
      marginRight: "30px"}}>
      {
        status === "loading" && <Loader />
      }

      {
        status === "success" && episode.map(item => (
            <Item key={item.id} item={item}/>
        ))
      }
    </div>
  )
}
