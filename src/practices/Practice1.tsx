export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題・引数の型指定</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};

/*javascriptは型指定してなくても勝手に推測してくれる。
だから、calcTotalFeeの引数に文字列で数字を入れても（"1000"みたいに）計算できる。
だが、1,100とかにすると、Nan(Not a Numberの意)が出たりする。
だから、計算するような関数は、引数に数字以外を受け取ったらその時点でエラーにする必要がある。
このように型指定をしておけば、実行する前にエラーが出ておかしいことが分かる。 **/
