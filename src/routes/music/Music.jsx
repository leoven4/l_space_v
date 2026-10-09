import "./music.scss";

const albums = [
  { artist: "Brian Eno", title: "Ambient 1: Music for Airports", note: "Slow, spacious textures for letting the mind settle.", color: "#c7d2c0" },
  { artist: "Nils Frahm", title: "Felt", note: "Intimate, soft piano recorded with a wonderfully gentle touch.", color: "#d7c2b0" },
  { artist: "Hiroshi Yoshimura", title: "Green", note: "Calm, luminous ambient music inspired by the natural world.", color: "#b7c7cc" },
  { artist: "Marconi Union", title: "Weightless", note: "A slow-moving soundscape for a quiet evening or a breathing break.", color: "#c9c1d6" },
  { artist: "The KLF", title: "Chill Out", note: "A dreamy, unhurried journey through soft ambient sounds.", color: "#d9c79e" },
  { artist: "Max Richter", title: "Sleep", note: "A gentle, expansive collection composed for rest and reflection.", color: "#b8c5d1" },
];

const Music = () => (
  <main className="music_page">
    <header className="music_header">
      <p className="music_eyebrow">A small listening guide</p>
      <h1>Music for slowing down.</h1>
      <p>A few albums to make room for a pause, a deep breath, or a quiet moment at the end of the day. Listen in whatever way feels good to you.</p>
    </header>
    <ol className="music_album_list">
      {albums.map((album, index) => (
        <li className="music_album" key={album.title}>
          <span className="music_album_number">{String(index + 1).padStart(2, "0")}</span>
          <div className="music_album_art" style={{ "--album-color": album.color }} aria-hidden="true">
            <span>{album.artist.split(" ").map((word) => word[0]).join("")}</span>
          </div>
          <div className="music_album_details">
            <h2>{album.title}</h2>
            <p className="music_album_artist">{album.artist}</p>
            <p className="music_album_note">{album.note}</p>
          </div>
          <span className="music_album_spark" aria-hidden="true">✳</span>
        </li>
      ))}
    </ol>
    <p className="music_footer_note">Take what you need. Leave the rest for another day.</p>
  </main>
);

export default Music;
