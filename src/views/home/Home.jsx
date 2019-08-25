import React, {Component} from 'react';
import Card from './../../components/card/Card'
import './Home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            tarea : '',
            listado : [],
        };
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });   
    }

    handleAddTask = () => {
        const { tarea, listado } = this.state;
        listado.push(tarea);
        this.setState({
            listado,
            tarea: ''
        });
    }



    render() {
        const{ username, password, tarea, listado} = this.state;
        return (
            <div>
                <Card title="Aplicación React" footer="Pie de la aplicación">
                    <table>
                        <tbody>
                            <tr key={1}>
                                <td>Usuario</td>
                                <td><input value={username} onChange={this.handleOnChange} name="username" /></td>
                            </tr>
                            <tr key={2}>
                                <td>Clave</td>
                                <td><input value={password} onChange={this.handleOnChange} name="password" /></td>
                            </tr>
                            <tr key={3}>
                                <td>Tarea</td>
                                <td><input value={tarea} onChange={this.handleOnChange} name="tarea" /></td>
                            </tr>
                            <tr key={4}>
                                <td colSpan="2" className="center">
                                    <button onClick={this.handleAddTask}>
                                        Agregar
                                    </button>
                                </td>
                            </tr>
                        </tbody>  
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td className="center">Número de Tarea</td>
                                <td className="center">Descripción</td>
                            </tr>
                        
                            {listado.map((e, i) => (
                                <tr key={i}>
                                    <td key={i}>{i}</td>
                                    <td key={i+1}>{e}</td>
                                </tr>
                            ))}
                    </tbody>
                    </table>
                </Card>
            </div>
        );
    }
}

export default Home;