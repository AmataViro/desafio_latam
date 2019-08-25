import React, {Component} from 'react';
import {getAll} from './../../services/hero.services';
import Table from './../../components/table/Table';
import Tbody from './../../components/table/Tbody';
import Td from './../../components/table/Td';
import Th from './../../components/table/Th';
import Tr from './../../components/table/Tr';
import Thead from './../../components/table/Thead';
import Input from './../../components/input/Input';


class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            datosTable : getAll(),
        };
    }

    render() {
        const {datosTable} = this.state;
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
                            {datosTable.map((e) => (
                                <Tr>
                                    <Td>{e.name}</Td>
                                    <Td>{e.race}</Td>
                                    <Td>{e.age}</Td>
                                    <Td>{e.weapon}</Td>
                                    <Td>
                                        <div className="controls">
                                            <div>☠ {'Kill'}</div>
                                            <div>💍 {'Use Ring'}</div>
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