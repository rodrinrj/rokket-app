import { Dropdown, Menu, Table } from "antd";
import React from "react";
import { Book } from "../models/Book";
import { Filter } from "../models/Filter";
import { getFilteredBooks, convertState } from "../services/booksTable.service";

const styles = require("./BooksTable.module.scss");

const { Column } = Table;

interface BooksTableProps {
  books: Book[];
  filter: Filter;
  onEdit: (book: Book) => void;
  onDelete: (bookId: string) => void;
}

const BooksTable: React.FC<BooksTableProps> = ({
  books,
  filter,
  onEdit,
  onDelete,
}) => {
  return (
    <Table
      className={styles.booksTable}
      dataSource={getFilteredBooks(books, filter)}
      title={() => filter.title}
      bordered
      pagination={false}
      rowKey="_id"
    >
      <Column
        title="Título"
        dataIndex="title"
        key="title"
        width="30%"
        render={(text) => <b>{text}</b>}
      />
      <Column title="Autor" dataIndex="author" key="author" width="25%" />
      <Column
        title="Estado"
        dataIndex="state"
        key="state"
        width="25%"
        render={(text) => convertState(text)}
      />
      <Column
        title="Acciones"
        key="actions"
        width="20%"
        render={(record: Book) => (
          <Dropdown.Button
            onClick={() => onEdit(record)}
            overlay={() => (
              <Menu>
                <Menu.Item onClick={() => onDelete(record._id)}>
                  Eliminar
                </Menu.Item>
              </Menu>
            )}
          >
            Editar libro
          </Dropdown.Button>
        )}
      />
    </Table>
  );
};

export default BooksTable;
