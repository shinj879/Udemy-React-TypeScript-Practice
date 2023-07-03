export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題・変数の型指定</p>
      <button onClick={onClickPractice}>練習問題３を実行</button>
    </div>
  );
};

/**変数に型を指定しておけば、何かが代入される際に代入元が間違っていても、型指定をした受け取る側のエラーで気づける。
 * この場合、関数Practice3の返却値がstringになっているが、totalの型がnumberなので、totalにエラーが出ている。
 */
