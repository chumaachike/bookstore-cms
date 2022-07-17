import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from './Book.module.css';

function Book({
  title, author, id, category,
}) {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));
  const complete = Math.floor(Math.random() * 100);
  const percentageComplete = `${complete}%`;
  const currentChapterNumber = `CHAPTER ${Math.floor(complete / 5, 0)}`;
  return (
    <li key={id}>
      <div className={styles.book}>
        <div className={styles.bookContent}>
          <div className={styles.bookInfo}>
            <div className={styles.bookCateogiry}>
              {category}
            </div>
            <div className={styles.bookTitle}>
              {title}
            </div>

            <div className={styles.bookAuthor}>
              {author}
            </div>
            <div className={styles.containerButtons}>
              <button className={styles.actionButton} type="button">Comments</button>
              <div className={styles.verticalDivider} />
              <button className={styles.actionButton} type="button" onClick={remove}>Remove</button>
              <div className={styles.verticalDivider} />
              <button className={styles.actionButton} type="button">Edit</button>
            </div>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.circularProgressContainer}>
              <div className={styles.circularProgress} />
            </div>
            <div className={styles.progressStatistics}>
              <p className={styles.percentComplete}>{percentageComplete}</p>
              <p className={styles.completed}>Completed</p>
            </div>
            <div className={styles.progressDivider} />
          </div>
          <div className={styles.currentChapterContainer}>
            <div>
              <p className={styles.currentChapterLabel}>CURRENT CHAPTER</p>
              <p className={styles.currentChapterNumber}>{currentChapterNumber}</p>
            </div>
            <button className={styles.updateProgressButton} type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
