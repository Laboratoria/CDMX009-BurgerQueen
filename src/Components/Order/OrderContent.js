import React from 'react';
import { Table, Divider } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons'

const OrderContent = ({nuevoCarrito, deleteProducto, ordenSeleccionada, historial}) => { 
  const columns = [
    {
      title: 'Cant',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 50
    },
    {
      title: 'Descripción',
      dataIndex: 'item',
      key: 'item',
      width: 150
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      width: 60
    },
    {
      title: 'Sub',
      key: 'subtotal',
      dataIndex:'subtotal',
      width: 60
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id) =>{
        return <DeleteTwoTone onClick={() => deleteProducto(id)} />
      },
      width: 30
    },
  ];
  const deleteTrashColumn = [
    {
      title: 'Cant',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 50
    },
    {
      title: 'Descripción',
      dataIndex: 'item',
      key: 'item',
      width: 150
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      width: 60
    },
    {
      title: 'Sub',
      key: 'subtotal',
      dataIndex:'subtotal',
      width: 60
    }
  ];
  console.log(nuevoCarrito?.item, ordenSeleccionada?.item)

  if (ordenSeleccionada) {
    return (
      <><Divider /><Table className="contentTable" columns={deleteTrashColumn} dataSource={ordenSeleccionada.item} size="middle" pagination={{ pageSize: 50 }} scroll={{ y: 300 }} />
      <Divider /></>
    )
  } else if (historial) {
    return (
      <><Divider /><Table className="contentTable" columns={deleteTrashColumn} dataSource={historial.item} size="middle" pagination={{ pageSize: 50 }} scroll={{ y: 300 }} />
      <Divider /></>
    )
  } else {
    return (
      <><Divider /><Table className="contentTable" columns={columns} dataSource={nuevoCarrito.item.map(i => ({ ...i, key: i.id }))} size="middle" pagination={{ pageSize: 50 }} scroll={{ y: 300 }} />
      <Divider /></>
    )
  }
}
 
export default OrderContent;
