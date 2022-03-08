const MediaTileWrapper = props => {
  return (
    <article className="media-tile">
      {props.children}
      <div className="item-list">
        <h4 className="ellipsis">{props.data.title}</h4>
        <h5>{`${props.data.artist} • ${props.data.type}`}</h5>
      </div>
    </article>
  );
}
export default MediaTileWrapper;