export default function Developers() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <img className="w-64" src="/img/bck4.png" alt="Background" />
      </div>
      <h1 className="py-7 text-4xl font-extrabold text-center text-white">
        <i className="fal fa-stars text-amber-400 mr-2" />
          Developers
        </h1>

      <div className="flex justify-center">
        <DiscordWidget imageUrl="https://discord.c99.nl/widget/theme-3/961941181879709696.png" />
      </div>
    </div>
  );
}

function DiscordWidget({ imageUrl }) {
  return (
    <img className="w-96 shadow-lg rounded-lg" src={imageUrl} alt="Discord Widget" />
  );
}

