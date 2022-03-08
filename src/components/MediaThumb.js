const MediaThumb = props => {
  return (
    <div className="thumb media">
      <img src={props.img} alt={props.title} />
    </div>
  );
}
export default MediaThumb;