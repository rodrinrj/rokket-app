import { RadioChangeEvent } from "antd/lib/radio";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux-store/reducers";
import BooksInfo from "../components/BooksInfo";
import BooksModal from "../components/BooksModal";
import BooksTable from "../components/BooksTable";
import CreateBookButton from "../components/CreateBookButton";
import SelectFilter from "../components/SelectFilter";
import { Book } from "../models/Book";
import {
  createBook,
  fetchBooks,
  setFilter,
  deleteBook,
  updateBook,
} from "../services/bookStore.service";

const styles = require("./BooksDashboard.module.scss");

const BooksDashboard: React.FC = () => {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    _id: "0",
    title: "",
    author: "",
    state: "",
    __v: 0,
  });
  const books = useSelector(({ books }: RootState) => books);
  const filter = useSelector(({ filter }: RootState) => filter);
  const dispatch = useDispatch();

  const handleCreateModal = (book: Book) => {
    createBook(dispatch, book);
    setCreateModalVisible(false);
  };

  const handleDelete = (bookId: string) => {
    deleteBook(dispatch, bookId);
  };

  const handleFilterChange = (event: RadioChangeEvent) => {
    setFilter(dispatch, event.target.value);
  };

  const handleUpdateModal = (book: Book) => {
    updateBook(dispatch, book);
    setUpdateModalVisible(false);
  };

  useEffect(() => {
    fetchBooks(dispatch);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 data-testid="pageTitle" className={styles.title}>
        Libros
      </h1>
      <div data-testid="actionStrip" className={styles.infoStrip}>
        <BooksInfo data-testid="booksInfo" amount={books.length} />
        <div data-testid="actionButtons" className={styles.buttons}>
          <SelectFilter
            data-testid="filterSelector"
            filter={filter}
            onChange={handleFilterChange}
          />
          <CreateBookButton
            data-testid="createBookButton"
            onClick={() => setCreateModalVisible(true)}
          />
        </div>
      </div>
      <BooksTable
        books={books}
        filter={filter}
        onEdit={(book: Book) => {
          setFormData(book);
          setUpdateModalVisible(true);
        }}
        onDelete={handleDelete}
      />
      <BooksModal
        visible={createModalVisible}
        onCreate={handleCreateModal}
        onCancel={() => setCreateModalVisible(false)}
      />
      <BooksModal
        visible={updateModalVisible}
        book={formData}
        onCreate={handleUpdateModal}
        onCancel={() => setUpdateModalVisible(false)}
      />
    </div>
  );
};

export default BooksDashboard;
