import React, {Component} from 'react';
import {getAll} from './../../services/hero.services';
import Table from './../../components/table/Table';
import Tbody from './../../components/table/Tbody';
import Td from './../../components/table/Td';
import Th from './../../components/table/Th';
import Tr from './../../components/table/Tr';
import Thead from './../../components/table/Thead';
import Input from './../../components/input/Input';
import Button from './../../components/button/Button';

import './List.css';


class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            typeRing:'btn btn-outline-primary',
            typeKill:'btn btn-outline-danger',
            stateRing: false,
            stateKill: false,
            datosTable : getAll(),
        };
    }

    handleKill = (e) => {
        const { datosTable } = this.state;
        console.log(e);
        console.log(datosTable);
        // aqui recorro datosTable y excluyo el ultimo registro guardandolo aparte para finalmente hacer push
    }
    render() {
        const {typeRing,typeKill,stateRing, stateKill, datosTable} = this.state;
        return (
            <div className="index">
                <h2>Fellowship of the Ring</h2>
                <div>
                    <div className="search-input">
                        <Input />
                    </div>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Race</Th>
                                <Th>Age</Th>
                                <Th>Weapon</Th>
                            </Tr>
                            </Thead>
                        <Tbody>
                            {datosTable.map((e,i) => (
                                <Tr key={i} class={e.live === true ? 'hero-kill':''}>
                                    <Td>{e.name}</Td>
                                    <Td>{e.race}</Td>
                                    <Td>{e.age}</Td>
                                    <Td>{e.weapon}</Td>
                                    <Td>
                                        <div className="controls">
                                            <div><Button title={'Use Ring'} type={typeRing} event={()=> (this.handleKill(e))}  state={stateRing}></Button></div>
                                            <div><Button title={'Kill'} type={typeKill} event={()=> (this.handleKill(e))} state={stateKill}></Button></div>
                                        </div>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </div>
        )
    }

};

export default List;