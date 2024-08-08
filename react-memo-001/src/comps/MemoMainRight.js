import css from "../css/MemoMainRight.module.css";

const MemoMainRight = ({ memoList }) => {
  const lists = memoList.map((memo) => {
    return (
      <>
        <li>{memo.id}</li>
        <li>{memo.subject}</li>
        <li>{memo.date}</li>
        <li>{memo.time}</li>
      </>
    );
  });

  return <ul className={css.main}>{lists}</ul>;
};
export default MemoMainRight;
