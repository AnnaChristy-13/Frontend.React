const root = ReactDOM.createRoot(document.getElementById('root'));

// прием props
// const Student = ({name,age}) => {   
// return (
//     <>
//     <h1>Name: {name}</h1>
//     <h2>Age: {age}</h2>
//     </>
// )
// }

class Student extends React.Component {
    render(){
        // const {name,age} =this.props;
        return (
            <>
            <h1>Name:{this.props.name}</h1>
            <h2>Age:{this.props.name}</h2>
            </>
             )
    }
}

root.render(
    <>
    {/* передача props */}
    <Student name='Peter'age={35}/>
    <Student name='Mary' age={18}/>
    <Student name='Boris' age={50+5}/>
    <Student name='Katy' age={23-5}/>
    </>
)
