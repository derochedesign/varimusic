import TabRow from "./TabRow";

const SectionHeader = props => {
  return (
    <div className="item-row vert-center">
      <h1>{props.title}</h1>
      <TabRow tabs={props.tabs} handleClick={props.handleClick} />
    </div>
  );
}
export default SectionHeader;