import React, { useState } from 'react';

export default function QuestionTwo() {
  const [output, setOutput] = useState('lol');
  function numberCheck(NUMBER) {
    let response;
    if (NUMBER % 2 === 0 && NUMBER % 14 !== 0) {
      console.log('foo');
      response = 'foo';
    } else if (NUMBER % 7 === 0 && NUMBER % 14 !== 0) {
      console.log('bar');
      response = 'bar';
    } else if (NUMBER % 14 === 0) {
      console.log('foobar');
      response = 'foobar';
    } else response = 'not divisible by 2,7 or 14';
    setOutput(response);
  }
  return (
    <div>
      <h1>Question two</h1>
      <input onChange={(value) => numberCheck(value.target.value)} />
      <h5>Output:{output} </h5>
    </div>
  );
}
