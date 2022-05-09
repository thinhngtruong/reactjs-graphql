import { useEffect, useState } from 'react'
import getData from './query'

const Component = () => {
  const [anime, setAnime] = useState()

  useEffect(() => {
    getData().then((data) => {
      console.log(data)
      setAnime(data)
    })
  }, [])

  return (
    <div style={{ padding: 16 }}>
      Test GraphQL
      <textarea
        style={{ display: 'block', marginTop: 24, width: '100%' }}
        rows={50}
        value={JSON.stringify(anime, null, 2)}
      />
    </div>
  )
}

export default Component
