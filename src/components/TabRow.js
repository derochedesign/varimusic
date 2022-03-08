const TabRow = props => {
  return (
    <nav aria-label="tertiary" className="tab-row">
      {
        props.tabs.map((t,i) => 
          <div className="tab" key={i} data-active={t.active} onClick={() => props.handleClick(i)}>
            <h5>{t.title}</h5>
          </div>
        )
      }
    </nav>
  );
}
export default TabRow;