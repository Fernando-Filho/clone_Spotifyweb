import './MyPlayList.css'

const MyPlayList = (props) => {
    return(
        <div className="MyPlayList">
            <h4>{props.text}</h4>
        </div>
    )
}

export default MyPlayList