import React from "react";
import { Modal, Form, Input, Select } from "antd";
import { Book } from "../models/Book";

const { Option } = Select;

interface BooksModalProps {
  visible: boolean;
  book?: Book;
  onCreate: (values: any) => void;
  onCancel: () => void;
}

const BooksModal: React.FC<BooksModalProps> = ({
  visible,
  book,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      data-testid="bookModal"
      title={book ? "Modificar libro" : "Agregar nuevo libro"}
      visible={visible}
      okText={book ? "Guardar" : "Crear"}
      cancelText="Cancelar"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            if (book) {
              values._id = book._id;
            }
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate field:", info);
          });
      }}
      onCancel={onCancel}
    >
      <Form
        form={form}
        name="create-book"
        layout="vertical"
        initialValues={book}
      >
        <Form.Item
          name="title"
          label="Título"
          rules={[{ required: true, message: "Debes ingresar un título" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="Autor"
          rules={[{ required: true, message: "Debes ingresar el autor" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="state"
          label="Estado"
          rules={[{ required: true, message: "Debes indicar el estado" }]}
        >
          <Select placeholder="Selecciona un estado">
            <Option value="reading">Leyendo</Option>
            <Option value="wishing">Por leer</Option>
            <Option value="finished">Finalizado</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BooksModal;
