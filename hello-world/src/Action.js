import React from 'react';

// здесь не совсем оптимальный вариант, так как при каждом render мы будем создавать две новых функции
// если использовать class component, можно сохранить ссылки на два метода в конструкторе
// и обращаться внутри к текущим props.value, переданным свыше
function getHandleClick(value, setValue, shouldIncrement) {
  // используем String.match, чтобы разбить строку на подстроки
  // первый элемент - полное совпадение, второй - первая скобка, третий - вторая скобка
  const [_, numberString, unit] = value.match(/^(\d+)(\w+)$/); // eslint-disable-line
  const number = Number(numberString);
  return function() {
    // здесь снова собираеим строку, например '9s', из (10 - 1 = 9) и ('s')
    setValue(`${shouldIncrement ? number + 1 : number - 1}${unit}`); 
  }
}

function ActionLink(props) {
  return (
    <div>
        <button className = "SimpleButton" onClick={getHandleClick(props.value, props.onChange, true)}> Slower! </button>
        <button className = "SimpleButton" onClick={getHandleClick(props.value, props.onChange, false)}> Faster! </button>
    </div> 
  );
}
            
export default ActionLink;

            
