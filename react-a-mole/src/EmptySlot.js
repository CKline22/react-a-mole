// A useEffect hook that will start the timer and clean it up afterwardimport {useEffect} from 'react'
import molehillImg from './molehill.png'
import { useEffect } from 'react'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={molehillImg} alt="molehill"/>
        </div>
    )
}

export default EmptySlot