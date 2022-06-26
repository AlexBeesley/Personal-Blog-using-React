import Style from '../Styles/pages.module.scss';
import Card from "../Components/card";
import CodeBox from "../Components/codebox";
import PageContents from "../Components/pagecontents";

export default function Htmlandcss() {
  const titles = [
    'Overview',
    'Implementing a Repository Class'
  ]
  return (
    <div>
      <div className={Style.title}>
        <h1 className={Style.mobileHeading}>.NET and C#</h1>
      </div>
      <PageContents titles={titles} links={titles} />
      <div className={Style.padding} />
      <a className={Style.anchor} id={titles[0]} />
      <Card title={titles[0]} blogpost={true}>
        <p></p>
      </Card>
      <div className={Style.padding} />
      <a className={Style.anchor} id={titles[1]} />
      <Card title={titles[1]} blogpost={true}>
        <p></p>
        <CodeBox language={'csharp'}>{post1f1()}</CodeBox>
      </Card>
    </div>
  );
}

const post1f1 = () => {
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