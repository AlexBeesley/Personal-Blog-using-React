import Style from '../Styles/pages.module.scss';
import Card from "../Components/card";
import CodeBox from "../Components/codebox";
import PageContents from "../Components/pagecontents";

export default function DevOps() {
  const titles = [
    'Overview',
  ]
  return (
    <div>
      <div className={Style.title}>
        <h1 className={Style.mobileHeading}>DevOps</h1>
      </div>
      <PageContents titles={titles} links={titles} />
      <div className={Style.padding} />
      <a className={Style.anchor} id={titles[0]} />
      <Card title={titles[0]} blogpost={true}>

      </Card>
    </div>
  );
}