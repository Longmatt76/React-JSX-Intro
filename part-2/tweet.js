function Tweet(props){
    return <div>
        <h1>Tweet by: <b>{props.username}</b> </h1>
        <h3>Name: <b>{props.name}</b></h3>
        <h3>Date: <b> {props.date}</b></h3>
        <p>{props.message}</p>
    </div>
}