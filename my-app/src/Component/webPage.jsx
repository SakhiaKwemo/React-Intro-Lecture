function WebPage (props) {

    return (
        <button style={{
            backgroundColor: `${props.color}`,
            width: '100px',
            height: '100px'
          }}>{props.name}
        </button>
    )
}

export default WebPage