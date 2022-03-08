import { useState } from "react";
import MediaThumb from "../components/MediaThumb";
import MediaTileWrapper from "../components/MediaTileWrapper";
import SectionHeader from "../components/SectionHeader";
import { ShuffleIcon } from "../icons/GeneralIcons";

const Feed = props => {
  
  const tempDataRecent = [
    {
      img: "https://dailytrojan.com/wp-content/uploads/2020/10/Jean_Dawson_Album_Cover-1030x1030.jpeg",
      title: "Starface*",
      artist: "Jean Dawson",
      type: "Song"
    },
    {
      img: "https://media.pitchfork.com/photos/61faf9fb2cc0b9d61dd3522a/1:1/w_600/Yeule-Glitch-Princess.jpeg",
      title: "Flowers are Dead",
      artist: "Yeule",
      type: "Song"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Grimes_-_Art_Angels.png",
      title: "Artangels",
      artist: "Grimes",
      type: "Song"
    },
    {
      img: "https://media.pitchfork.com/photos/61d740b79a8903a73574e2a5/1:1/w_600/FKA-twigs-Caprisongs.jpg",
      title: "Tears in the Club",
      artist: "FKA Twigs",
      type: "Song"
    },
    {
      img: "https://dailytrojan.com/wp-content/uploads/2020/10/Jean_Dawson_Album_Cover-1030x1030.jpeg",
      title: "Starface*",
      artist: "Jean Dawson",
      type: "Song"
    },
    {
      img: "https://media.pitchfork.com/photos/61faf9fb2cc0b9d61dd3522a/1:1/w_600/Yeule-Glitch-Princess.jpeg",
      title: "Eyes",
      artist: "Yeule",
      type: "Song"
    },
    {
      img: "https://dailytrojan.com/wp-content/uploads/2020/10/Jean_Dawson_Album_Cover-1030x1030.jpeg",
      title: "Starface*",
      artist: "Jean Dawson",
      type: "Song"
    },
    {
      img: "https://media.pitchfork.com/photos/61faf9fb2cc0b9d61dd3522a/1:1/w_600/Yeule-Glitch-Princess.jpeg",
      title: "Don't be so hard on your own beauty",
      artist: "Yeule",
      type: "Song"
    },
    {
      img: "https://dailytrojan.com/wp-content/uploads/2020/10/Jean_Dawson_Album_Cover-1030x1030.jpeg",
      title: "Starface*",
      artist: "Jean Dawson",
      type: "Song"
    }
  ]
  const tempDataNew = [
    {
      img: "https://media.pitchfork.com/photos/61faf9fb2cc0b9d61dd3522a/1:1/w_600/Yeule-Glitch-Princess.jpeg",
      title: "Flowers are Dead",
      artist: "Yeule",
      type: "Song"
    }
  ]
  
  const [currTab, setCurrTab] = useState(0);
  const tabs = [{title:"recent", active:currTab === 0},{title:"new", active:currTab === 1},{title:"discover", active:currTab === 2}];
  const tempData = (currTab === 0) ? tempDataRecent : tempDataNew
  
  return (
    <section className="layout-list">
      <SectionHeader title="Feed" tabs={tabs} handleClick={setCurrTab}/>
      <button className="icon-text">
        <div className="icon-display"><ShuffleIcon /></div>
        {`Shuffle ${tabs[currTab].title}`}
      </button>
      <div className="media-layout tile">
        {
          tempData.map((en,i) => 
            <MediaTileWrapper key={i} data={en}>
              <MediaThumb img={en.img} title={en.title}/>
            </MediaTileWrapper>
          )
        }
        
      </div>
    </section>
  );
}
export default Feed;