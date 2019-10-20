import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Table, { Td, ERR0, ERR1, Tbody, Thead, Sorter, Th } from '../src'
// import { ERR2 } from '../src/Tds'
import { ERR2, ERR3 } from '../src/errorMessage'

const data = [
    { name: 'Chevron Corp.', last: 115.35, chg: 0.24, chgp: 0.21 },
    { name: 'Verizon Communications Inc.', last: 60.41, chg: 0.12, chgp: 0.20 },
    { name: 'Visa Inc. Cl A', last: 177.94, chg: 0.07, chgp: 0.04 },
    { name: 'Procter & Gamble Co.', last: 116.63, chg: -0.15, chgp: -0.13 },
    { name: 'Exxon Mobil Corp.', last: 68.14, chg: -0.09, chgp: -0.13 }
]

test('Error: Td', () => {
    const { queryByText } = render(
        <TestingError>
            <Table
                columns={[
                    {
                        Header: 'COMPANY',
                        dataKey: 'name',
                        Cell: () => <span></span>
                    },
                    {
                        Header: 'CHG',
                        dataKey: 'chg'
                    },
                    {
                        Header: 'CHG %',
                        dataKey: 'chgp'
                    }
                ]}
                data={data}
            />
        </TestingError>
    )
    const msg = queryByText(ERR0)
    expect(msg).toBeTruthy()
})

test('Error: Th', () => {
    const { queryByText } = render(
        <TestingError>
            <Table
                columns={[
                    {
                        Header: () => <th></th>,
                        dataKey: 'name'
                    },
                    {
                        Header: 'LAST',
                        dataKey: 'last'
                    },
                    {
                        Header: 'CHG',
                        dataKey: 'chg'
                    },
                    {
                        Header: 'CHG %',
                        dataKey: 'chgp'
                    }
                ]}
                data={data}
            />
        </TestingError>
    )
    const msg = queryByText(ERR1)
    expect(msg).toBeTruthy()
})

test('Error: Sorter', () => {
    const { queryByText } = render(
        <Table
            columns={[
                {
                    Header: <Th><span style={{display:'table-cell'}}>COMPANY</span><Sorter/></Th>,
                    width: '*'
                },
                {
                    Header: 'LAST',
                    dataKey: 'last'
                },
                {
                    Header: 'CHG',
                    dataKey: 'chg'
                },
                {
                    Header: 'CHG %',
                    dataKey: 'chgp'
                }
            ]}
            data={data}
        />
    )
    const msg = queryByText(ERR3)
    expect(msg).toBeTruthy()
})

class TestingError extends React.Component {
    static getDerivedStateFromError(error) { return { hasError: true, error } }
    state = { hasError: false }
    render() {
        return this.state.hasError ? <label>{this.state.error}</label> : this.props.children
    }
}