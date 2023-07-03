export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題・返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題２を実行</button>
    </div>
  );
};

/**関数の返却値に型指定をする場合、引数の（）の後ろに「:型」を書く。
 * 複雑な配列やオブジェクトを返却する場合は、返却値をきちんと書いて見やすくする。
 */
