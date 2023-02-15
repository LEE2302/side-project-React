import React, { useState } from "react";

const Form = (props) => {
  const [nameValue, setNameValue] = useState();
  const [titleValue, setTitleValue] = useState();
  const [questionValue, setQuestionValue] = useState();
  //   const [formSubmit, setFromSubmit] = useState();
  //   console.log(formSubmit);
  console.log(props);

  const formHandler = (event) => {
    event.preventDefault();

    const formData = {
      author: nameValue,
      title: titleValue,
      question: questionValue,
    };

    props.formDataStateSave(formData);
    console.log(props.formDataStateSave(formData));

    setNameValue("");
    setTitleValue("");
    setQuestionValue("");
  };

  const nameHandler = (event) => {
    setNameValue(event.target.value);
  };

  const titleHandler = (event) => {
    setTitleValue(event.target.value);
  };

  const questionHandler = (event) => {
    setQuestionValue(event.target.value);
  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <div>
          <label>이름</label>
          <input
            type="text"
            placeholder="이름 입력란"
            onChange={nameHandler}
            value={nameValue}
          ></input>
        </div>
        <div>
          <label>제목</label>
          <input
            type="text"
            placeholder="제목 입력란"
            onChange={titleHandler}
            value={titleValue}
          ></input>
        </div>
        <div>
          <label>질문</label>
          <textarea
            placeholder="질문을 작성해주세요"
            onChange={questionHandler}
            value={questionValue}
          ></textarea>
        </div>
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
};

export default Form;
