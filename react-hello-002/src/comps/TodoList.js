const List = () => {
  const todos = [
    "체육관 가기",
    "청구서 정리",
    "길동이 만나기",
    "계란 구입하기",
    "HTML 책 읽기",
    "책상정리",
  ];
  const lists = todos.map((todo) => <li>{todo}</li>);

  return (
    <>
      <div>
        <ul>{lists}</ul>
      </div>
    </>
  );
};
export default List;
