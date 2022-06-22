import Style from '../Styles/html-and-css.module.scss';
import Card from "../Components/card";
import CodeBox from "../Components/codebox";

export default function Htmlandcss() {
  return (
    <div>
      <h1 className={Style.mobileHeading}>HTML and CSS</h1>
      <h3>Learning Blog documenting my programming experience with HTML and CSS.</h3>
      < Card 
          title="Example Code"
          paragraph1="Here is some example code."
          expandable={false} >
        <CodeBox
            language="HTML">{demo1()}</CodeBox>
      </Card>
    </div>
  );
}

const demo1 = () => {
    return (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>`
    );
}