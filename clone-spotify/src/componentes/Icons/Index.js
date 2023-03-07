import Icons from './Icons.css'

const IconHome = (props) => {
    return(
        <div className="Icones">
            <ion-icon url={`../../public/image/icons/${props.icone}.svg`}/>
        </div>
    )
}

export default IconHome