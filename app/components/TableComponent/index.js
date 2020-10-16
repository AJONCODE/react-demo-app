/**
 *
 * TableComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
import { motion } from 'framer-motion';

function TableComponent({ tableHeaders, tableData }) {
  return (
    <motion.div
      whileHover={{
        position: 'relative',
        zIndex: 1,
        scale: [1, 1.4, 1.02],
        rotate: [0, 8, -8, 0],
        filter: [
          'hue-rotate(0) contrast(100%)',
          'hue-rotate(360deg) contrast(200%)',
          'hue-rotate(45deg) contrast(300%)',
          'hue-rotate(0) contrast(100%)',
        ],
        transition: {
          duration: 0.3,
        },
      }}
    >
      <Table
        celled
        inverted
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <Table.Header>
          <Table.Row>
            {tableHeaders.map((data, index) => (
              <Table.HeaderCell style={tableHeaderStyle} key={index}>
                {data.title.toUpperCase()}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.map(
            (data, index) =>
              console.log('tableData: data: ', data) || (
                <Table.Row key={index}>
                  {Object.keys(data).map(
                    (cellData, index2) =>
                      console.log(
                        'data[tableHeaders[index2].tag]:',
                        data[tableHeaders[index2].tag],
                      ) || (
                        <Table.Cell style={tableCellStyle} key={index2}>
                          {data[tableHeaders[index2].tag].type === 'string' && (
                            <span>{`${
                              data[tableHeaders[index2].tag].value
                            }`}</span>
                          )}
                          {data[tableHeaders[index2].tag].type === 'number' && (
                            <span>{`${Number(
                              data[tableHeaders[index2].tag].value,
                            )}`}</span>
                          )}
                          {data[tableHeaders[index2].tag].type === 'number' &&
                            data[tableHeaders[index2].tag].symbol && (
                              <span>{`${Number(
                                data[tableHeaders[index2].tag].value,
                              )} ${
                                data[tableHeaders[index2].tag].symbol
                              }`}</span>
                            )}
                          {data[tableHeaders[index2].tag].type === 'date' && (
                            <span>{`${new Date(
                              data[tableHeaders[index2].tag].value,
                            ).toGMTString()}`}</span>
                          )}
                        </Table.Cell>
                      ),
                  )}
                </Table.Row>
              ),
          )}
        </Table.Body>
      </Table>
    </motion.div>
  );
}

TableComponent.propTypes = {};

const tableHeaderStyle = {
  fontFamily: `'Courier Prime', monospace`,
  fontSize: '18px',
  fontWeight: 700,
};

const tableCellStyle = {
  fontFamily: `'Courier Prime', monospace`,
  fontSize: '14px',
  fontWeight: 600,
  minWidth: '35px',
  color: 'black',
};

export default TableComponent;
